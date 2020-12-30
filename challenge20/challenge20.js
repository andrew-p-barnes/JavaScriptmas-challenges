/* Given an array of domains, return an array of top-level domain types i.e. the domain that follows the last dot (".") */

function domainType(domains) {
    domainsMap = new Map();
    domainsMap.set("org","organization");
    domainsMap.set("com","commercial");
    domainsMap.set("net","network");
    domainsMap.set("info","information");

    strArr = [];
    domains.forEach(domainStr => {
        let arr = domainStr.split(".");
        arr.forEach(element => {
            strArr.push(element);
        });
    });

    domainTypeSet = new Set();
    strArr.forEach(element => {
        if (domainsMap.has(element)) {
            domainTypeSet.add(domainsMap.get(element));
        }
    });
    let domainTypeArr = Array.from(domainTypeSet);
    return domainTypeArr;
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]))