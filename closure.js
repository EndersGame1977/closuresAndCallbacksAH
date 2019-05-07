const func = () => {
    const name = "closure1";
    const func2 = () => {
        const name2 = "closure2";
        const func3 = () => {
            const name3 = "closure3"
            console.log(`${name} ${name2} ${name3}`);
        }
        console.log(`${name} ${name2}`);
        func3();
    }
    console.log(`${name}`);
    func2();
}

func();

const obj = {
    name: "object1",
    getName: () => {
        return this.name;
    },
    getNameNormal: function () {
        return this.name;
    }
}

const testObject = () => {
    const name = "TestObject";
    const name2 = obj.getName();
    const name3 = obj.name;
    const name4 = obj.getNameNormal();
    const getTestName = () => {
        return name;
    }
    const testName = getTestName();
}

testObject();