const ancestors = [
    {
        id: '',
        name: '',
        dateOfBirth: '',
        dateOfDeath: '',
        maternalId: '',
        paternalId: '',
        childId: '',
        masterBranch: 'W-STEP-1924',
        _research: {
            status: '',
            ancestryLink: '',
        }
    },
    {
        id: 'S-DELP-1781',
        name: 'Susanna Delph',
        dateOfBirth: '10/7/1781',
        dateOfDeath: '1840',
        maternalId: '',
        paternalId: '',
        childId: 'E-DEER-1813',
        masterBranch: 'W-STEP-1924',
        _research: {
            status: 'COMPLETE',
            ancestryLink: 'https://www.ancestry.com/family-tree/person/tree/1574660/person/280174062434/facts',
        }
    },
    {
        id: 'A-DEER-1780',
        name: 'Andrew Deer',
        dateOfBirth: '2/23/1780',
        dateOfDeath: '1850',
        maternalId: '',
        paternalId: '',
        childId: 'E-DEER-1813',
        masterBranch: 'W-STEP-1924',
        _research: {
            status: 'COMPLETE',
            ancestryLink: 'https://www.ancestry.com/family-tree/person/tree/1574660/person/280174062432/facts',
        }
    },
    {
        id: 'E-DEER-1813',
        name: 'Elizabeth Deer',
        dateOfBirth: '3/10/1813',
        dateOfDeath: '5/24/1877',
        maternalId: 'S-DELP-1781',
        paternalId: 'A-DEER-1780',
        childId: 'I-STEP-1848',
        masterBranch: 'W-STEP-1924',
        _research: {
            status: 'COMPLETE',
            ancestryLink: 'https://www.ancestry.com/family-tree/person/tree/1574660/person/-1918068275/facts',
        }
    },
    {
        id: 'J-STEP-1813',
        name: 'James S Stephenson',
        dateOfBirth: '10/8/1813',
        dateOfDeath: '6/21/1887',
        maternalId: '',
        paternalId: '',
        childId: 'I-STEP-1848',
        masterBranch: 'W-STEP-1924',
        _research: {
            status: 'COMPLETE',
            ancestryLink: 'https://www.ancestry.com/family-tree/person/tree/1574660/person/-1918068277/facts',
        }
    },
    {
        id: 'I-STEP-1848',
        name: 'Isaac Newton Stephenson',
        dateOfBirth: '1848',
        dateOfDeath: '1897',
        maternalId: 'E-DEER-1813',
        paternalId: 'J-STEP-1813',
        childId: 'W-STEP-1892',
        masterBranch: 'W-STEP-1924',
        _research: {
            status: 'COMPLETE',
            ancestryLink: 'https://www.ancestry.com/family-tree/person/tree/1574660/person/-1918068240/facts',
        }
    },
    {
        id: 'D-RYAN-1925',
        name: 'Doris Irene Ryan',
        dateOfBirth: '6/13/1925',
        dateOfDeath: '1/12/2012',
        maternalId: '',
        paternalId: '',
        masterBranch: 'D-RYAN-1925',
    },
    {
        id: 'W-STEP-1924',
        name: 'William Warner Stephenson',
        dateOfBirth: '7/15/1924',
        dateOfDeath: '11/9/2007',
        maternalId: 'J-BARR-1891',
        paternalId: 'W-STEP-1892',
        masterBranch: 'W-STEP-1924',
        _research: {
            status: 'INCOMPLETE',
            notes: 'needs 1950 on'
        }
    },
    {
        id: 'W-STEP-1892',
        name: 'William Warner Stephenson',
        dateOfBirth: '9/18/1892',
        dateOfDeath: '12/11/1959',
        maternalId: 'E-BUZA-1855',
        paternalId: 'J-BUZA-1831',
        childId: 'W-STEP-1924',
        masterBranch: 'W-STEP-1924',
        _research: {
            status: 'COMPLETE',
        }
    },
    {
        id: 'J-BARR-1891',
        name: 'Josephine Millie Barrow',
        dateOfBirth: '3/3/1891',
        dateOfDeath: '2/1/1973',
        maternalId: '',
        paternalId: '',
        childId: 'W-STEP-1924',
        masterBranch: 'W-STEP-1924',
    },
    {
        id: 'E-BUZA-1855',
        name: 'Algesetta (Etta) Buzan',
        dateOfBirth: '5/20/1855',
        dateOfDeath: '5/29/1917',
        maternalId: 'A-HUDI-1838',
        paternalId: 'J-BUZA-1831',
        childId: 'W-STEP-1892',
        masterBranch: 'W-STEP-1924',
        _research: {
            status: 'COMPLETE',
            ancestryLink: 'https://www.ancestry.com/family-tree/person/tree/1574660/person/-1918068243/facts',
        }
    },
    {
        id: 'J-BUZA-1831',
        name: 'Jacob Warren Buzan',
        dateOfBirth: '10/26/1831',
        dateOfDeath: '3/17/1917',
        maternalId: 'N-MCDO-1792',
        paternalId: 'J-BUZA-1803',
        childId: 'E-BUZA-1855',
        masterBranch: 'W-STEP-1924',
        _research: {
            status: 'COMPLETE',
            ancestryLink: 'https://www.ancestry.com/family-tree/person/tree/1574660/person/-1918068439/facts',
        }
    },
    {
        id: 'J-BUZA-1803',
        name: 'Jacob Larue Buzan',
        dateOfBirth: '5/10/1803',
        dateOfDeath: '2/28/1885',
        maternalId: '',
        paternalId: '',
        childId: 'J-BUZA-1831',
        masterBranch: 'W-STEP-1924',
        _research: {
            status: 'COMPLETE',
            ancestryLink: 'https://www.ancestry.com/family-tree/person/tree/1574660/person/-1918068435/facts',
        }
    },
    {
        id: 'N-MCDO-1792',
        name: 'Nancy Larue McDonald',
        dateOfBirth: '1792',
        dateOfDeath: '1839',
        maternalId: '',
        paternalId: '',
        childId: 'J-BUZA-1831',
        masterBranch: 'W-STEP-1924',
        _research: {
            status: '',
            ancestryLink: 'https://www.ancestry.com/family-tree/person/tree/1574660/person/-1918068430/facts',
        }
    },
    {
        id: 'A-HUDI-1838',
        name: 'Angeline Hudiburgh',
        dateOfBirth: '1838',
        dateOfDeath: '3/29/1860',
        maternalId: 'N-WALL-1813',
        paternalId: 'S-HUDI-1814',
        childId: 'E-BUZA-1855',
        masterBranch: 'W-STEP-1924',
        _research: {
            status: 'COMPLETE',
            ancestryLink: 'https://www.ancestry.com/family-tree/person/tree/1574660/person/-1918068438/facts'
        }
    },
    {
        id: 'N-WALL-1813',
        name: 'Nancy Wallard',
        dateOfBirth: '1813',
        dateOfDeath: '2/18/1871',
        maternalId: '',
        paternalId: '',
        childId: 'A-HUDI-1838',
        masterBranch: 'W-STEP-1924',
        _research: {
            status: 'COMPLETE',
            ancestryLink: 'https://www.ancestry.com/family-tree/person/tree/1574660/person/-1918068431/facts'
        }
    },
    {
        id: 'S-HUDI-1814',
        name: 'Samuel Smith Hudiburgh',
        dateOfBirth: '9/29/1814',
        dateOfDeath: '8/21/1852',
        maternalId: '',
        paternalId: '',
        childId: 'A-HUDI-1838',
        masterBranch: 'W-STEP-1924',
        _research: {
            status: 'COMPLETE',
            ancestryLink: 'https://www.ancestry.com/family-tree/person/tree/1574660/person/-1918068432/facts'
        }
    },
];

module.exports = ancestors;
