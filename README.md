# Safe-Json

The functions that help to parse JSON objects and array safely.

## Array

### filterArray

Filter items from array that have properties(keys) specified in the parameter includes, and don't have in the parameter excludes.

The parameters, includes and excludes, is set to empty array at default.

```TypeScript
const filtered = filterArray(array, ["id", "name", "createdAt"], ["unused_keys"])
```

### refineArray

Return another array that only includes properties specified in the parameters.

```TypeScript
const refined = refineArray(
  array,
  ["ID", "Name", "created_AT", "COUNTS", "MUST_haveValue"],
  ["id", "name", "createdAt", "counts", "mustHaveValue"]
)
```

## Object

### accessObject

Return the corresponding value if the property is in object, or null.

```TypeScript
const temp = {
  id: 1,
  name: "Temporary Object",
  createdAt: "20210301"
  counts: 30,
}
const value = accessObject(temp, "counts")
// value === 30
```

### refineObject

Return new object by changing the keys in the object.

```TypeScript
const refined = refineObject(temp, ["id", "name", "createdAt", "counts", "category", "tags"])
```
