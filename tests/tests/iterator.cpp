#include "executable.h"

TEST(iterator) {
    Typegen t;

    using Map = UnorderedMap<int, int>;
    using iter = typename UnorderedMap<int, int>::iterator;
    using value_type = std::pair<int, int>;

    // check iterator functions
    for(size_t i = 0; i < TEST_ITER; i++) {
        const size_t sz = t.range(100UL);
        const size_t num_pairs = t.range(1000UL);

        Map map(sz);
        std::unordered_map<int, int> shad_map(sz);

        ASSERT_TRUE(map.begin() == map.end());

        std::vector<value_type> pairs(num_pairs);
        t.fill(pairs.begin(), pairs.end());

        for(auto pair: pairs) {
            map.insert(pair);
            shad_map.insert(pair);
        }

        {
            Memhook mh;

            ASSERT_EQ(shad_map.size(), map.size());

            for(iter it = map.begin(); it != map.end(); it++) {
                auto found = shad_map.find(it->first);
                ASSERT_TRUE(found != shad_map.end());
            }

            for(iter it = map.begin(); it != map.end(); ++it) {
                auto found = shad_map.find(it->first);
                ASSERT_TRUE(found != shad_map.end());
            }

            iter it_a = map.begin();
            iter it_b = map.begin();
            size_t count = 0UL;
            while(it_a != map.end()) {
                ASSERT_TRUE(it_a == it_b);
                ASSERT_TRUE(*it_a == *it_b);
                it_a++;
                it_b++;
                count ++;
            }
            ASSERT_EQ(map.size(), count);

            ASSERT_EQ(0UL, mh.n_scoped_frees());
            ASSERT_EQ(0UL, mh.n_allocs());
        }
    }
}
