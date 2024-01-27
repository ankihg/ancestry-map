const { ancestors, addresses, households } = require('./data/index');

const commandLibrary = {
    // findHouseholdsForAncestor
    'hfa': function(ancestorId) {
        return households.filter((household) => household.ancestorIds
            .includes(ancestorId))
            .sort((a, b) => a.year - b.year);
    },
    // findAncestor
    'fa': function(ancestorId) {
        return ancestors.find((ancestor) => ancestor.id === ancestorId)
    }
}


const command = process.argv[2];
const action = commandLibrary[command];
const output = action(process.argv[3]);
console.log(output);
