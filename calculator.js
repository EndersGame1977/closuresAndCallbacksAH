const createCalculator = () => {
    let total = 0;
    const calc = {
        add: function(number){
            total += number;
        },
        subtract: function(number){
            total -= number;
        },

        getTotal: function() {
            return total;
        }
    }

    return calc;
}

const calculator = createCalculator();

module.exports = calculator;