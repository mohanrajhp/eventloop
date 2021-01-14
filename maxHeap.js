class Maxheap {

    //constructor
    constructor(){
        //start with a heap array with null.
        this.heap = [null];
    };

    //getting the largest.

    getLarget(){
        return this.heap[1];
    }

    //inserting items.
    insert(node){

        //insert first at the end of the array.
        this.heap.push(node);

        //find the correct position
        if(this.heap.length > 1){

            let current = this.heap.length - 1;

            while(current > 1 && this.heap[Math.floor(current / 2)] < this.heap[current]){
                
                //we do the swapping
                [
                    this.heap[Math.floor(current / 2)],this.heap[current]
                ] = [
                    this.heap[current],this.heap[Math.floor(current / 2)]
                ];

                //we change the current.
                current = Math.floor(current / 2);
            }
        }

    };

    //removing items
    remove(){

        //check if we got two elements in heap array.
        if(this.heap.length === 2){
            this.heap.splice(1,1);
        } else if (this.heap.length > 2) {

            this.heap[1] = this.heap[this.heap.length - 1];

            //remove the last item
            this.heap.splice(this.heap.length - 1);

            //check if the length is 3.
            if(this.heap.length === 3){

                if(this.heap[2] > this.heap[1]){
                    [
                        this.heap[1],this.heap[2]
                    ] = [
                        this.heap[2],this.heap[1]
                    ]
                }

            };

            //setup needed indexes.
            let current = 1;
            let leftChildIndex = current * 2;
            let rightChildIndex = current * 2 + 1;

            while(
                this.heap[leftChildIndex] &&
                this.heap[rightChildIndex] &&
                (
                    this.heap[current] < this.heap[leftChildIndex] || 
                    this.heap[current] < this.heap[rightChildIndex]
                )
            ) {

                /** first step is to check if the left side value is more than the right side */
                if(this.heap[leftChildIndex] > this.heap[current]){

                    /** swap with the current */
                    [
                        this.heap[current],this.heap[leftChildIndex] 
                    ] = [
                        this.heap[leftChildIndex],this.heap[current]
                    ];

                    //update the current.
                    current = leftChildIndex;
                } else if(this.heap[rightChildIndex] > this.heap[current]){

                    /** swap with the current */
                    [
                        this.heap[current],this.heap[rightChildIndex]
                    ] = [
                        this.heap[rightChildIndex], this.heap[current]
                    ];

                    //update the current
                    current = rightChildIndex;
                };

                //update the rightChildIndex and leftChildIndex.
                leftChildIndex = current * 2;
                rightChildIndex = current * 2 + 1;
            };

            //incase the right child is undefined, but the left child index value is greater than the current.
            if(this.heap[rightChildIndex] === undefined && this.heap[leftChildIndex] > this.heap[current]){

                //swap
                [
                    this.heap[current],this.heap[leftChildIndex]
                ] = [
                    this.heap[leftChildIndex],this.heap[current]
                ]
            };

        } else {
            return null;
        };

        return;

    }

};

let max_heap = new Maxheap();

let array_to_be_inserted = [10,23,36,32,38,45,57];

//insert the values to the max_heap.
array_to_be_inserted.forEach((value) => max_heap.insert(value));

//we remove 
max_heap.remove();

//accessing the values in the max_heap
console.log(max_heap.heap)