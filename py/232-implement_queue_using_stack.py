class MyQueue:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.storage = []
        self.size = 0
        self.top = None

    def push(self, x: int) -> None:
        """
        Push element x to the back of queue.
        """
        # Check if its empty
        # If so... set pushed object as top
        if self.empty():
            self.top = x
        self.storage.append(x)
        self.size += 1

    def pop(self) -> int:
        """
        Removes the element from in front of queue and returns that element.
        """
        new_storage = []
        popped = None
        # Loop backwards
        for i in range(self.size - 1, -1, -1):
            print(i)
            # If at final item, save it to be returned
            if i == 0:
                popped = self.storage.pop()
            # Item after popped item is the top one
            elif i == 1:
                self.top = self.storage.pop()
            # Push every popped object to new_storage
            else:
                new_storage.append(self.storage.pop())
        # Decrease size by 1
        self.size -= 1
        # Set self.storage to new storage
        self.storage = new_storage
        return popped

    def peek(self) -> int:
        """
        Get the front element.
        """
        return self.top

    def empty(self) -> bool:
        """
        Returns whether the queue is empty.
        """
        return self.storage == 0


# Your MyQueue object will be instantiated and called as such:
obj = MyQueue()
obj.push(1)
obj.push(2)
obj.push(3)
obj.push(4)
obj.push(5)
obj.push(6)
param_2 = obj.pop()
param_3 = obj.peek()
param_4 = obj.empty()
print("param_2", param_2)
print("param_3", param_3)
print("param_4", param_4)
