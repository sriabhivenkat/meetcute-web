#include "executable.h"

TEST(bucket_iterator) {
    Typegen t;

    using Map = UnorderedMap<int, int>;
    using iter = typename UnorderedMap<int, int>::local_iterator;
    using value_type = std::pair<int, int>;

    // check iterator functions
    for(size_t i = 0; i < TEST_ITER; i++) {
        const size_t sz = t.range(100UL);
        const size_t num_pairs = t.range(1000UL);

        Map map(sz);
        shadow_map<int, int> shad_map(sz);

        for(size_t i = 0; i<map.bucket_count(); i++) {
            ASSERT_TRUE(map.begin(i) == map.end(i)); 
        }

        std::vector<value_type> pairs(num_pairs);
        t.fill(pairs.begin(), pairs.end());

        for(auto pair: pairs) {
            map.insert(pair);
            shad_map.insert(pair);
        }

        {
            Memhook mh;

            for(size_t bucket = 0; bucket < shad_map.bucket_count(); bucket++) {

                ASSERT_EQ(shad_map.bucket_size(bucket), map.bucket_size(bucket));

                for(iter it = map.begin(bucket); it != map.end(bucket); it++) {
                    ASSERT_TRUE(shad_map.contained_in_bucket(it->first, bucket));
                }

                for(iter it = map.begin(bucket); it != map.end(bucket); ++it) {
                    ASSERT_TRUE(shad_map.contained_in_bucket(it->first, bucket));
                }

                iter it_a = map.begin(bucket);
                iter it_b = map.begin(bucket);

                while(it_a != map.end(bucket)) {
                    ASSERT_TRUE(it_a == it_b);
                    ASSERT_TRUE(*it_a == *it_b);
                    it_a++;
                    it_b++;
                }
            }

            ASSERT_EQ(0UL, mh.n_scoped_frees());
            ASSERT_EQ(0UL, mh.n_allocs());
        }
    }
}
