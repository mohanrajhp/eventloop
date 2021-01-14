class Minheap {

    constructor(){
        //initializing the array heap and adding a dummy element at index 0.
        this.heap = [null];
    };

    //accessing the min element.

    getMin(){
        return this.heap[1]; //the first element is the least, since we started with null.
    };

    //inserting a new element.

    insert(node){

        //start by inserting the node at the end of the heap array.
        this.heap.push(node);

        //finding the correct position.
        if(this.heap.length > 2){

            //the last index of the heap
            let current = this.heap.length - 1;

            //check that we are not in the first index and also the value before is greater than the value we are inserting.

            while(current > 1 && this.heap[Math.floor(current / 2)] > this.heap[current]){

                //swap the values
                [
                    this.heap[Math.floor(current / 2)],this.heap[current]
                ] = [
                    this.heap[current],this.heap[Math.floor(current / 2)]
                ];

                //change the current now.
                current = Math.floor(current / 2);
            }

        }
    }

    //removing an element.

    remove(){


        /**
         * When there are more than two elements in an array,
         * we put the right most element at the top and start comparing
         * the child nodes.
         */

        if(this.heap.length > 2){

            this.heap[1] = this.heap[this.heap.length - 1];

            //remove the last item of the heap.
            this.heap.splice(this.heap.length - 1);

            if(this.heap.length === 3){
                if(this.heap[1] > this.heap[2]){

                    //swap them
                    [
                        this.heap[1],this.heap[2]
                    ] = [
                        this.heap[2],this.heap[1]
                    ]
                };
                return;
            };

            let current = 1;
            let leftChildIndex = current * 2;
            let rightChildIndex = current * 2 + 1;

            while(
                this.heap[leftChildIndex] &&
                this.heap[rightChildIndex] &&
                (this.heap[current] > this.heap[leftChildIndex] || 
                 this.heap[current] > this.heap[rightChildIndex]) 
                ) 

            {
                //check if the left child index value is less than that of right.
                if(this.heap[leftChildIndex] < this.heap[rightChildIndex]){

                    //swap the current value with the left child index value
                    [
                        this.heap[current],this.heap[leftChildIndex]
                    ] = [
                        this.heap[leftChildIndex],this.heap[current]
                    ];

                    //change the current.
                    current = leftChildIndex;
                } else {

                    // swap the current value with the right child index value
                    [
                        this.heap[current],this.heap[rightChildIndex]
                    ] = [
                        this.heap[rightChildIndex],this.heap[current]
                    ];

                    //change the current.
                    current = rightChildIndex;
                };

                //update the left child index and right child index.
                leftChildIndex = current * 2;
                rightChildIndex = current * 2 + 1;

            };


            //incase right child index is undefined.
            if(this.heap[rightChildIndex] === undefined && this.heap[leftChildIndex] < this.heap[current]){

                //swapping.
                [
                    this.heap[current],this.heap[leftChildIndex]
                ] = [
                    this.heap[leftChildIndex],this.heap[current]
                ]
            };

        }

        // if there are only two elements in the array.
        else if(this.heap.length === 2){

            this.heap.splice(1,1);

        } else {

            return null;

        };

        return;
    }

};


let min_heap = new Minheap();
let array_to_be_inserted = [10,23,36,32,38,45,57];

//insert the value to the min heap.
array_to_be_inserted.forEach((value) => min_heap.insert(value));

//try removing
min_heap.remove();

//accessing the values
console.log(min_heap.heap);