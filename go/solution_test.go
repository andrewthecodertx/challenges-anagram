package main

import "testing"

func TestIsAnagram(t *testing.T) {
	tests := []struct {
		s1       string
		s2       string
		expected bool
	}{
		{"listen", "silent", true},
		{"hello", "world", false},
		{"Listen", "Silent", true},
		{"astronomer", "moon starer", true},
		{"abc", "def", false},
	}

	for _, tt := range tests {
		result := IsAnagram(tt.s1, tt.s2)
		if result != tt.expected {
			t.Errorf("IsAnagram(%q, %q) = %v, want %v", tt.s1, tt.s2, result, tt.expected)
		}
	}
}
