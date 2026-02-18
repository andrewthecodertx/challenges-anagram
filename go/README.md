# Go

## Solution

```go
package main

import (
	"sort"
	"strings"
)

func IsAnagram(s1, s2 string) bool {
	s1 = strings.ToLower(s1)
	s2 = strings.ToLower(s2)
	r1 := strings.Split(s1, "")
	r2 := strings.Split(s2, "")
	sort.Strings(r1)
	sort.Strings(r2)
	return strings.Join(r1, "") == strings.Join(r2, "")
}
```

## Running Tests

```bash
go test -v
```
