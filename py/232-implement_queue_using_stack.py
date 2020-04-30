class MyQueue:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.stack_one = []
        self.stack_two = []

    def push(self, x: int) -> None:
        """
        Push element x to the back of queue.
        """
        # Append to stack_one
        self.stack_one.append(x)

    def transfer(self):
        # Transfer all back into first stack
        while self.stack_two:
            self.stack_one.append(self.stack_two.pop())

    def pop(self) -> int:
        """
        Removes the element from in front of queue and returns that element.
        """
        popped = None
        # While stack_one has contents...
        while self.stack_one:
            # Push all values by popping from stack_one -> stack_two
            self.stack_two.append(self.stack_one.pop())
        # Store popped value to be dequeued
        popped = self.stack_two.pop()
        # Transfer all contents back to stack_one
        self.transfer()
        # Return popped value
        return popped

    def peek(self) -> int:
        """
        Get the front element.
        """
        # Transfer to stack_two
        while self.stack_one:
            # Push all values by popping from stack_one -> stack_two
            self.stack_two.append(self.stack_one.pop())
        # Save "top" of stack_two which is the "front" element
        # The top of the stack is the -1 index of the list LAST ELEMENT
        front = self.stack_two[-1]
        # Transfer back to stack_one
        self.transfer()
        # Return "front" element
        return front

    def empty(self) -> bool:
        """
        Returns whether the queue is empty.
        """
        return len(self.stack_one) < 1 and len(self.stack_two) < 1


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
