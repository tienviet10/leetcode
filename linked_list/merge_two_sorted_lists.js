

class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}


const mergeTwoLists = function(list1, list2) {
  let startNode = new ListNode(),
    dummy = startNode;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      dummy.next = list1;
      list1 = list1.next;
    } else {
      dummy.next = list2;
      list2 = list2.next;
    }
    dummy = dummy.next;
  }

  if (list1) {
    dummy.next = list1;
  }

  if (list2) {
    dummy.next = list2;
  }

  return startNode.next;
};