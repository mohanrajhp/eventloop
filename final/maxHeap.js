const heap = [null];

function insert(node){

    //insert first at the end of the array.
    heap.push(node);

    
    if(heap.length > 1){

        //get index
        let current = heap.length - 1;

        //Loop through checking if the parent is less.

        while(current > 1 && heap[Math.floor(current / 2)] < heap[current]){
            
            //swap
            [
                heap[Math.floor(current / 2)],heap[current]
            ] = [
                heap[current],heap[Math.floor(current / 2)]
            ];

            //change the index
            current = Math.floor(current / 2);
        }
    }

};

function getMax(){
    return heap[1];
};



function remove(){

    //check if we got two elements in heap array.
    if(heap.length === 2){

        //remove the Ist index value
        heap.splice(1,1);

    } else if (heap.length > 2) {

        //assign last value to first index
        heap[1] = heap[heap.length - 1];

        //remove the last item
        heap.splice(heap.length - 1);

        //check if the length is 3.
        if(heap.length === 3){

            if(heap[2] > heap[1]){
                [
                    heap[1],heap[2]
                ] = [
                    heap[2],heap[1]
                ]
            }

        };

        //setup needed indexes.
        let parent_node = 1;
        let left_node = parent_node * 2;
        let right_node = parent_node * 2 + 1;

        while(
            heap[left_node] && heap[right_node] 
        ) {

            //parent node value is smaller than the left node value
            if(heap[left_node] > heap[parent_node]){

                //swap
                [
                    heap[parent_node],heap[left_node] 
                ] = [
                    heap[left_node],heap[parent_node]
                ];

                //update the parent node index.
                current = left_node;
            }
            
            if(heap[right_node] > heap[parent_node]){

                //swap
                [
                    heap[parent_node],heap[right_node]
                ] = [
                    heap[right_node], heap[parent_node]
                ];

                //update the parent node index.
                current = right_node;
            };

            if(heap[left_node] < heap[right_node]) {

                //swap
                [
                    heap[left_node],heap[right_node]
                ] = [
                    heap[right_node],heap[left_node]
                ];

            }

            //update the left and right node
            left_node = current * 2;
            right_node = current * 2 + 1;
        };

        //no right child, but left child is greater than parent
        if(heap[right_node] === undefined && heap[left_node] > heap[parent_node]){

            //swap
            [
                heap[parent_node],heap[left_node]
            ] = [
                heap[left_node],heap[parent_node]
            ]
        };

    } else {
        return null;
    };

    return;

};

insert(10);
insert(100);
insert(120);
insert(1000);

remove()

console.log(getMax());