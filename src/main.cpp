#include "UnorderedMap.h"
#include <random>
#include <limits>
#include <iostream>
#include <iomanip>

constexpr size_t MAX_TERMINAL_WIDTH = 80;
constexpr size_t N_ELEMENTS = 1e3;

static void print_sep() {
    std::cout << std::endl;
    for(size_t i = 0; i < MAX_TERMINAL_WIDTH; i++)
        std::cout << '-';
    std::cout << std::endl << std::endl;
}

int main() {
    auto hash = [](const int & num) -> size_t {
        return num;
    };

    UnorderedMap<int, int, decltype(hash)> map(30, hash);

    std::random_device rd;
    std::mt19937 generator(rd());

    for(size_t i = 0; i < N_ELEMENTS; i++) {
        map.insert({generator(), 0});
    }

    std::vector<size_t> bucket_sizes(map.bucket_count());
    size_t max_count = std::numeric_limits<size_t>::min();
    for(size_t bucket = 0; bucket < map.bucket_count(); bucket++) {
        bucket_sizes[bucket] = map.bucket_size(bucket);
        max_count = std::max(max_count, bucket_sizes[bucket]);
    }

    double load_variance = std::numeric_limits<double>::max();
    if(map.size() > 1) {
        load_variance = 0;
        double res;
        for(size_t i = 0; i < map.bucket_count(); i++) {
            res = bucket_sizes[i] - map.load_factor();
            load_variance += res * res;
        }
        load_variance /= map.size() - 1;
    }

    print_sep();

    for(size_t bucket = 0; bucket < map.bucket_count(); bucket++) {
        std::cout << std::setw(5) << bucket << ": ";
        
        size_t width = MAX_TERMINAL_WIDTH * 
            (static_cast<float>(bucket_sizes[bucket]) / static_cast<float>(max_count));
    
        for(size_t i = 0; i < width; i++) {
            std::cout << "#";
        }

        std::cout << std::endl;
    }

    print_sep();

    std::cout << "  Size: " << map.size() << std::endl;
    std::cout << "  Buckets: " << map.bucket_count() << std::endl;
    std::cout << "  Load factor: " << map.load_factor() << std::endl;
    std::cout << "  Load variance: " << load_variance << std::endl;
}