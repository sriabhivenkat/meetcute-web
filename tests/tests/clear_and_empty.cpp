#include "executable.h"

TEST(clear_and_empty) {
    Typegen t;
    for(size_t i = 0; i < TEST_ITER; i++) {
        using value_type = std::pair<double, double>;
        using Map = UnorderedMap<double, double>;
        
        size_t n_buckets = i == 0 ? 0ULL : t.range<size_t>(1, 256);
        size_t n_pairs = t.range(1000ul);
        
        std::vector<value_type> pairs(n_pairs);
        t.fill(pairs.begin(), pairs.end());

        Map map(n_buckets);
        shadow_map<double, double> shadow_map(n_buckets);

        for(auto const & pair : pairs) {
            shadow_map.insert(pair);
        }
        
        {
            Memhook mh;
            for(auto const & pair : pairs) {
                map.insert(pair);
            }
            ASSERT_PAIRS_FOUND_IN_CORRECT_BUCKETS(shadow_map, map);
            ASSERT_EQ(shadow_map.size(), map.size());
            ASSERT_EQ(shadow_map.size(), mh.n_allocs());
        }
        
        if(map.size()) ASSERT_FALSE(map.empty());

        {
            Memhook mh;
            map.clear();
            ASSERT_EQ(shadow_map.size(), mh.n_frees());
        }
        ASSERT_EQ(0ULL, map.size());
        ASSERT_TRUE(map.empty());
    }
}
