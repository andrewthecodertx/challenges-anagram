import pytest
from solution import is_anagram

def test_anagram():
    assert is_anagram("listen", "silent") == True
    assert is_anagram("hello", "world") == False
    assert is_anagram("Listen", "Silent") == True
    assert is_anagram("astronomer", "moon starer") == True
    assert is_anagram("abc", "def") == False
