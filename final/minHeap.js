const heap = [null];

function insert(node){

    heap.push(node);

    if(heap.length > 1){

        let current = heap.length - 1;

        while(current > 1 && heap[Math.floor(current / 2)] > heap[current] ){

            //swapping values
            [
                heap[Math.floor(current / 2)], heap[current]
            ] = [
                heap[current], heap[Math.floor(current / 2)]
            ];

            current = Math.floor(current / 2);

        }

    }

    return;
};

function getMin(){
    return heap[1];
};



function remove() {
    if (heap.length > 2) {
      //assign last value to first index
      heap[1] = heap[heap.length - 1];
  
      //remove the last value
      heap.splice(heap.length - 1);
  
      if (heap.length === 3) {
        if (heap[1] > heap[2]) {
          //swap them
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return;
      }
  
      //get indexes
      let parent_node = 1;
      let left_node = parent_node * 2;
      let right_node = parent_node * 2 + 1;
  
      while (heap[left_node] && heap[right_node]) {
        //parent node greater than left child node
        if (heap[parent_node] > heap[left_node]) {
          //swap the values
  
          [heap[parent_node], heap[left_node]] = [
            heap[left_node],
            heap[parent_node],
          ];
        }
  
        //parent node greater than right child node
        if (heap[parent_node] > heap[right_node]) {
          // swap
          [heap[parent_node], heap[right_node]] = [
            heap[right_node],
            heap[parent_node],
          ];
        }
  
        if (heap[left_node] > heap[right_node]) {
          //swap
          [heap[left_node], heap[right_node]] = [
            heap[right_node],
            heap[left_node],
          ];
        }
  
        parent_node += 1;
        left_node = parent_node * 2;
        right_node = parent_node * 2 + 1;
      }
  
      //incase right child index is undefined.
      if (heap[right_node] === undefined && heap[left_node] < heap[parent_node]) {
        //swap.
        [heap[parent_node], heap[left_node]] = [
          heap[left_node],
          heap[parent_node],
        ];
      }
    }
  
    // if there are only two elements in the array.
    else if (heap.length === 2) {
      // remove the 1st index value
      heap.splice(1, 1);
    } else {
      return null;
    }
  
    return;
  }

insert(10);
insert(90);
insert(36);
insert(5);
insert(1);

remove();

console.log(heap.slice(1));