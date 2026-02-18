# Python

## Solution

```python
def is_anagram(s1: str, s2: str) -> bool:
    return sorted(s1.lower()) == sorted(s2.lower())
```

## Running Tests

```bash
python -m pytest
```
