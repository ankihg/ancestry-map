const households = [
    {
        addressId: '',
        ancestorIds: [''],
        year: 0,
        source: ''
    },
    {
        addressId: 'BROWN-IN',
        ancestorIds: ['A-DEER-1780'],
        year: 1840,
        source: '1840s census'
    },
    {
        addressId: 'MADISON-VA',
        ancestorIds: ['A-DEER-1780'],
        year: 1790,
        source: 'guess: birth records of siblings'
    },
    {
        addressId: 'CULPEPER-VA',
        ancestorIds: ['A-DEER-1780'],
        year: 1780,
        source: 'guess: birth records'
    },
    {
        addressId: 'MADISON-VA',
        ancestorIds: ['S-DELP-1781', 'A-DEER-1780'],
        year: 1810,
        source: '1810s census'
    },
    {
        addressId: 'MADISON-VA',
        ancestorIds: ['S-DELP-1781', 'A-DEER-1780', 'A-DEER-1780'],
        year: 1800,
        source: 'guess: birth records of children'
    },
    {
        addressId: 'CULPEPER-VA',
        ancestorIds: ['S-DELP-1781'],
        year: 1790,
        source: 'guess: birth records of siblings'
    },
    {
        addressId: 'BOONE-COUNTY-KY',
        ancestorIds: ['E-DEER-1813', 'S-DELP-1781', 'A-DEER-1780'],
        year: 1830,
        source: '1830s census'
    },
    {
        addressId: 'BOONE-COUNTY-KY',
        ancestorIds: ['E-DEER-1813', 'S-DELP-1781', 'A-DEER-1780'],
        year: 1820,
        source: '1820s census'
    },
    {
        addressId: 'PARKE-COUNTY-IN',
        ancestorIds: ['J-STEP-1813', 'E-DEER-1813'],
        year: 1840,
        source: 'guess'
    },
    {
        addressId: 'BOONE-COUNTY-KY',
        ancestorIds: ['J-STEP-1813'],
        year: 1830,
        source: 'guess'
    },
    {
        addressId: 'BOONE-COUNTY-KY',
        ancestorIds: ['J-STEP-1813'],
        year: 1820,
        source: 'guess'
    },
    {
        addressId: 'SHERMAN-MO',
        ancestorIds: ['I-STEP-1848', 'J-STEP-1813'],
        year: 1880,
        source: '1880s census',
    },
    {
        addressId: 'CASS-COUNTY-MO',
        ancestorIds: ['I-STEP-1848', 'E-DEER-1813', 'J-STEP-1813'],
        year: 1870,
        source: '1870s census',
    },
    {
        addressId: 'HOWARD-IN',
        ancestorIds: ['I-STEP-1848', 'E-DEER-1813', 'J-STEP-1813'],
        year: 1860,
        source: '1860s census'
    },
    {
        addressId: 'SUGAR-CREEK-IN',
        ancestorIds: ['I-STEP-1848', 'E-DEER-1813', 'J-STEP-1813'],
        year: 1850,
        source: '1850s census'
    },
    {
        addressId: 'HARDIN-COUNTY-KY',
        ancestorIds: ['N-MCDO-1792'],
        year: 1820,
        source: 'guess'
    },
    {
        addressId: 'HARDIN-COUNTY-KY',
        ancestorIds: ['N-MCDO-1792'],
        year: 1810,
        source: 'guess'
    },
    {
        addressId: 'HARDIN-COUNTY-KY',
        ancestorIds: ['N-MCDO-1792'],
        year: 1800,
        source: 'guess'
    },
    {
        addressId: 'MONMOUTH-IL',
        ancestorIds: ['J-BUZA-1803'],
        year: 1880,
        source: '1880s census'
    },
    {
        addressId: 'MONMOUTH-IL',
        ancestorIds: ['J-BUZA-1803'],
        year: 1870,
        source: 'guess'
    },
    {
        addressId: 'MONMOUTH-IL',
        ancestorIds: ['J-BUZA-1803'],
        year: 1860,
        source: '1860s census'
    },
    {
        addressId: 'HARDIN-COUNTY-KY',
        ancestorIds: ['J-BUZA-1803', 'N-MCDO-1792'],
        year: 1830,
        source: '1830s census'
    },
    {
        addressId: 'WARREN-COUNTY-IL',
        ancestorIds: ['J-BUZA-1803'],
        year: 1820,
        source: 'guess'
    },
    {
        addressId: 'WARREN-COUNTY-IL',
        ancestorIds: ['J-BUZA-1803'],
        year: 1810,
        source: 'The Past and present of Warren County, Illinois'
    },
    {
        addressId: 'WARREN-COUNTY-IL',
        ancestorIds: ['J-BUZA-1831', 'J-BUZA-1803'],
        year: 1840,
        source: '1840s census'
    },
    {
        addressId: 'WARREN-COUNTY-IL',
        ancestorIds: ['J-BUZA-1831', 'J-BUZA-1803'],
        year: 1850,
        source: '1850s census'
    },
    {
        addressId: 'KNOX-COUNTY-TN',
        ancestorIds: ['S-HUDI-1814'],
        year: 1820,
        source: 'guess',
    },
    {
        addressId: 'JOHNSON-COUNTY-IN',
        ancestorIds: ['S-HUDI-1814'],
        year: 1830,
        source: 'guess',
    },
    {
        addressId: '243-1ST-PLACE-LONG-BEACH',
        ancestorIds: ['D-RYAN-1925'],
        year: 1950,
        source: '1950s census',
    },
    {
        addressId: '1907-E-MAURETANIA-WILMINGTON',
        ancestorIds: ['D-RYAN-1925'],
        year: 1940,
        source: '1940s census',
    },
    {
        addressId: '1318-E-37th-LONG-BEACH',
        ancestorIds: ['W-STEP-1924', 'W-STEP-1892', 'J-BARR-1891'],
        year: 1930,
        source: '1930s census',
    },
    {
        addressId: '1487-ELM-LONG-BEACH',
        ancestorIds: ['W-STEP-1924', 'W-STEP-1892', 'J-BARR-1891'],
        year: 1940,
        source: '1940s census',
    },
    {
        addressId: 'LONG-BEACH-CA',
        ancestorIds: ['W-STEP-1892', 'J-BARR-1891'],
        year: 1920,
        source: '1920s census',
    },
    {
        addressId: 'SHERMAN-MO',
        ancestorIds: ['W-STEP-1892', 'E-BUZA-1855'],
        year: 1910,
        source: '1910s census',
    },
    {
        addressId: 'SHERMAN-MO',
        ancestorIds: ['W-STEP-1892', 'E-BUZA-1855'],
        year: 1900,
        source: '1900s census',
    },
    {
        addressId: 'SHERMAN-MO',
        ancestorIds: ['E-BUZA-1855', 'I-STEP-1848'],
        year: 1890,
        source: 'guess',
    },
    {
        addressId: 'SHERMAN-MO',
        ancestorIds: ['E-BUZA-1855'],
        year: 1880,
        source: 'guess',
    },
    {
        addressId: 'SHERMAN-MO',
        ancestorIds: ['J-BUZA-1831'],
        year: 1910,
        source: '1910s census',
    },
    {
        addressId: 'KANSAS-CITY-MO',
        ancestorIds: ['J-BUZA-1831'],
        year: 1900,
        source: '1990s census',
    },
    {
        addressId: 'SHERMAN-MO',
        ancestorIds: ['J-BUZA-1831'],
        year: 1890,
        source: 'guess',
    },
    {
        addressId: 'SHERMAN-MO',
        ancestorIds: ['J-BUZA-1831'],
        year: 1880,
        source: '1880s census',
    },
    {
        addressId: 'CASS-COUNTY-MO',
        ancestorIds: ['E-BUZA-1855'],
        year: 1870,
        source: '1870s census',
    },
    {
        addressId: 'CASS-COUNTY-MO',
        ancestorIds: ['J-BUZA-1831'],
        year: 1870,
        source: 'guess',
    },
    {
        addressId: 'CASS-COUNTY-MO',
        ancestorIds: ['E-BUZA-1855', 'J-BUZA-1831', 'A-HUDI-1838'],
        year: 1860,
        source: '1860s census',
    },
    {
        addressId: 'HENSLEY-IN',
        ancestorIds: ['A-HUDI-1838', 'N-WALL-1813', 'S-HUDI-1814'],
        year: 1850,
        source: '1850s census',
    },
    {
        addressId: 'HENSLEY-IN',
        ancestorIds: ['N-WALL-1813'],
        year: 1870,
        source: 'guess',
    },
    {
        addressId: 'HENSLEY-IN',
        ancestorIds: ['N-WALL-1813'],
        year: 1860,
        source: 'guess',
    },
    {
        addressId: 'HENSLEY-IN',
        ancestorIds: ['A-HUDI-1838', 'N-WALL-1813', 'S-HUDI-1814'],
        year: 1840,
        source: 'guess',
    },
    {
        addressId: 'JOHNSON-COUNTY-IN',
        ancestorIds: ['N-WALL-1813'],
        year: 1830,
        source: 'guess',
    },
    {
        addressId: 'GREEN-COUNTY-KY',
        ancestorIds: ['N-WALL-1813'],
        year: 1820,
        source: 'guess',
    }
];

module.exports = households;
