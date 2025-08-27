function f() {
  alert(this.name);//John
}

f = f.bind( {name: "John"} ).bind( {name: "Pete"} );

f(); 