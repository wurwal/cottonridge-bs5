function sayHello() {
    return "Hello, World!";
}

// Test function
function testSayHello() {
    const result = sayHello();
    const expected = "Hello, World!";

    if (result === expected) {
        console.log("Test passed!");
    } else {
        console.log(`Test failed: expected "${expected}", but got "${result}"`);
    }
}

// Run the test
testSayHello(); 
