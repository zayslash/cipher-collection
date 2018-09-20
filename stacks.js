//NAME: ZANIF SANDY (ZAYSLASH)

function Stack()  {
  this.dataStore = [];
  this.top =0;
  this.pop = pop;
  this.push = push;
  this.peek = peek;
  this.length= length;

  function push(element){
    this.dataStore[this.top++] = element;

  }

  function pop(){
    return this.dataStore[--this.top];
  }


  function peek(){
    return this.dataStore[this.top-1];
  }

  function length(){
    return this.top;
  }

  function clear(){
    this.top = 0;
  }

}
