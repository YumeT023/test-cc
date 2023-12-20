# Complexity analysis

This project aims to compare the complexity of two different files in terms of Complexity (space and time)

### Files

- [Original impl](https://github.com/YumeT023/test-cc/blob/main/original_code.js)
- [Refactored impl](https://github.com/YumeT023/test-cc/blob/main/refactored.js)

### Analysis (Highlights)

- **Original impl**
  - _fn simulateRiceCooker()_: has no proper termination..., It performs a constant number of operations regardless of the input thus its time complexity is O(1).
  - _const riceCooker_: itself takes O(1) (time and space)

- **Refactored impl**
  - _fn simulateRiceCooker(cooker)_: function has a time complexity of O(n) because it performs a loop of operations that depends on the number of choices in the menu.

- **common**
  - _fn delaySync(ms)_: This function is dependent on the `ms` and has an O(ms) time complexity; however, because it is called with the same input size every time,
  it doesn't contribute to the the time complexity of the function that calls it. (no other way detected in this program)


**NOTE**

The simulateRiceCooker function was refactored, and its time complexity is now O(n) instead of O(1).
The refactored version of the function has several advantages over the original, including **controlled execution that prevents blocking**, **efficient CPU usage**, and **improved readability**.
