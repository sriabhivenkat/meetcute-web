#include <cstddef>    // size_t
#include <functional> // std::hash
#include <utility>    // std::pair
#include <iostream>

#include "primes.h"

template <typename Key, typename T, typename Hash = std::hash<Key>, typename Pred = std::equal_to<Key>>
class UnorderedMap {
    public:

    using key_type = Key;
    using mapped_type = T;
    using hasher = Hash;
    using key_equal = Pred;
    using value_type = std::pair<const key_type, mapped_type>;
    using reference = value_type &;
    using const_reference = const value_type &;
    using pointer = value_type *;
    using const_pointer = const value_type *;
    using size_type = size_t;
    using difference_type = ptrdiff_t;

    private:

    struct HashNode {
        HashNode *next;
        value_type val;

        HashNode(HashNode *next = nullptr) : next{next} {}
        HashNode(const value_type & val, HashNode * next = nullptr) : next { next }, val { val } { }
        HashNode(value_type && val, HashNode * next = nullptr) : next { next }, val { std::move(val) } { }
    };

    HashNode **_buckets;
    size_type _size;
    size_type _bucket_count;

    HashNode _head;

    Hash _hash;
    key_equal _equal;

    static size_type _range_hash(size_type hash_code, size_type bucket_count) {
        return hash_code % bucket_count;
    }

    public:

    class iterator {
    public:
        using iterator_category = std::forward_iterator_tag;
        using value_type = std::pair<const key_type, mapped_type>;
        using difference_type = ptrdiff_t;
        using pointer = value_type *;
        using reference = value_type &;

    private:
        friend class UnorderedMap<Key, T, Hash, key_equal>;
        using HashNode = typename UnorderedMap<Key, T, Hash, key_equal>::HashNode;

        HashNode * _node;

        explicit iterator(HashNode *ptr) noexcept { }

    public:
        iterator() {
            _node = nullptr;
        };
        iterator(const iterator &) = default;
        iterator(iterator &&) = default;
        ~iterator() = default;
        iterator &operator=(const iterator &) = default;
        iterator &operator=(iterator &&) = default;
        reference operator*() const { 
            return reference(_node->val);
        }
        pointer operator->() const { 
            return pointer(&(_node->val));
        }
        iterator &operator++() {
            _node = _node->next;
            return *this;
        }
        iterator operator++(int) {
            iterator tmp = *this;
            ++(*this);
            return tmp;
        }
        bool operator==(const iterator &other) const noexcept {
            return _node == other._node;
        }
        bool operator!=(const iterator &other) const noexcept {
            return _node != other._node;
        }
    };

    class local_iterator {
        public:
            using iterator_category = std::forward_iterator_tag;
            using value_type = std::pair<const key_type, mapped_type>;
            using difference_type = ptrdiff_t;
            using pointer = value_type *;
            using reference = value_type &;

        private:
            friend class UnorderedMap<Key, T, Hash, key_equal>;
            using HashNode = typename UnorderedMap<Key, T, Hash, key_equal>::HashNode;

            UnorderedMap * _map;
            HashNode * _node;
            size_type _bucket;

            explicit local_iterator(UnorderedMap * map, HashNode *ptr, size_type bucket) noexcept {
                
            }

        public:
            local_iterator() {
                _map = nullptr;
                _node = nullptr;
                _bucket = 0;
            };
            local_iterator(const local_iterator &) = default;
            local_iterator(local_iterator &&) = default;
            ~local_iterator() = default;
            local_iterator &operator=(const local_iterator &) = default;
            local_iterator &operator=(local_iterator &&) = default;
            reference operator*() const { 
                return _node->val;
             }
            pointer operator->() const { 
                return &_node->val;
             }
            local_iterator & operator++() {
                _node = _node->next;
                return *this;
            }
            local_iterator operator++(int) {
                local_iterator tmp = *this;
                ++(*this);
                return tmp;
            }
            bool operator==(const local_iterator &other) const noexcept {
                // TODO
                return _node == other._node;
            }
            bool operator!=(const local_iterator &other) const noexcept {
                // TODO
                return _node != other._node;
            }
    };

private:

    size_type _bucket(size_t code) const { return _range_hash(code, _bucket_count); }
    size_type _bucket(const Key &key) const { return _bucket(_hash(key)); }

    void _insert_before(size_type bucket, HashNode *node) {
        HashNode *prev = _buckets[bucket];
        if(prev == nullptr) {
            _head.next = node;

        } else {
            prev->next = node;
        }

    }

    HashNode*& _bucket_begin(size_type bucket) {
        /* TODO */
    }

    HashNode* _find_prev(size_type code, size_type bucket, const Key & key) {
        HashNode *prev = _buckets[bucket];
        HashNode *current = prev->next;
        while(current != nullptr) {
            if(_equal(current->val.first, key)) {
                return prev;
            }
            prev = current;
            current = current->next;
        }
        return nullptr;
    }

    HashNode* _find_prev(const Key & key) {
        /* TODO */
    }

    void _erase_after(HashNode * prev) {
        /* TODO */
    }

public:
    explicit UnorderedMap(size_type bucket_count, const Hash & hash = Hash { },
                const key_equal & equal = key_equal { }) : _hash(hash) {
        /* TODO */
        size_t next_prime = next_greater_prime(bucket_count);
        _bucket_count = next_prime;
        _buckets = new HashNode*[_bucket_count];
        _size = 0;
        _equal = equal;
        _head.next = nullptr;

    }

    ~UnorderedMap() {
        /* TODO */
    }

    UnorderedMap(const UnorderedMap & other) {
        /* TODO */
    }

    UnorderedMap(UnorderedMap && other) {
        /* TODO */
    }

    UnorderedMap & operator=(const UnorderedMap & other) {
        /* TODO */
    }

    UnorderedMap & operator=(UnorderedMap && other) {
        /* TODO */
    }

    void clear() noexcept {
        /* TODO */
    }

    size_type size() const noexcept { return _size; }

    bool empty() const noexcept { /* TODO */ }

    size_type bucket_count() const noexcept { return _bucket_count; }

    iterator begin() { 
        return iterator(_buckets[_bucket_count]);
    }

    iterator end() {
        return iterator(nullptr);
    }

    local_iterator begin(size_type n) { 
        return local_iterator(this, _buckets[n], n);
    }

    local_iterator end(size_type n) { 
        return local_iterator(this, nullptr, n);
     }

    size_type bucket_size(size_type n) {
        /* TODO */
    }

    float load_factor() const { /* TODO */ }

    size_type bucket(const Key & key) const {
        return _bucket(key);
     }

    std::pair<iterator, bool> insert(value_type && value) {
        
    }

    std::pair<iterator, bool> insert(const value_type & value) {

    }

    iterator find(const Key & key) {

    }

    T& operator[](const Key & key) {
        /* TODO */
        
    }

    iterator erase(iterator pos) {
        /* TODO */
    }

    size_type erase(const Key & key) {
        /* TODO */
    }

    template<typename KK, typename VV>
    friend void print_map(const UnorderedMap<KK, VV> & map, std::ostream & os);
};

template<typename K, typename V>
void print_map(const UnorderedMap<K, V> & map, std::ostream & os = std::cout) {
    using size_type = typename UnorderedMap<K, V>::size_type;
    using HashNode = typename UnorderedMap<K, V>::HashNode;

    HashNode const * node = map._head.next;
    os << "List: ";
    do {
        if(node) {
            os << "(" << node->val.first << ", " << node->val.second << ") ";
        } else {
            os << "(nullptr)";
            break;
        }

        node = node->next;
    } while(true);
    os << std::endl;

    for(size_type bucket = 0; bucket < map.bucket_count(); bucket++) {
        os << bucket << ": ";

        HashNode const * node = map._buckets[bucket];

        if(!node) {
            os << "(nullptr)";
        } else {
            while((node = node->next) && map.bucket(node->val.first) == bucket) {
                os << "(" << node->val.first << ", " << node->val.second << ") ";
            }
        }
        os << std::endl;
    }
}