// export const partnersData = {
//   privateBanks: [
//     "HDFC Bank", "ICICI Bank", "Axis Bank", "Kotak Mahindra Bank",
//     "IndusInd Bank", "Yes Bank", "IDFC First Bank"
//   ],
//   publicBanks: [
//     "State Bank of India (SBI)", "Bank of Baroda", "Punjab National Bank (PNB)",
//     "Canara Bank", "Union Bank of India", "Indian Bank", "Bank of India",
//     "Central Bank of India"
//   ],
//   nbfcs: [
//     "Bajaj Finserv", "Tata Capital", "Aditya Birla Finance", "L&T Finance",
//     "Piramal Finance", "Hero FinCorp", "Cholamandalam Finance", "Mahindra Finance",
//     "Shriram Finance", "Clix Capital", "InCred Finance", "UGRO Capital",
//     "IIFL Finance", "Indiabulls Housing Finance", "Aavas Finance",
//     "PNB Housing Finance", "LIC Housing Finance", "Home First Finance",
//     "Capri Global Capital"
//   ]
// };










interface Partner {
  name: string;
  domain: string;
}

export const partnersData: {
  privateBanks: Partner[];
  publicBanks: Partner[];
  nbfcs: Partner[];
} = {
  privateBanks: [
    { name: "HDFC Bank",           domain: "hdfc.bank.in" },
    { name: "ICICI Bank",          domain: "icicibank.com" },
    { name: "Axis Bank",           domain: "axis.bank.in" },
    { name: "Kotak Mahindra Bank", domain: "kotak.bank.in" },
    { name: "IndusInd Bank",       domain: "indusind.bank.in" },
    { name: "Yes Bank",            domain: "yes.bank.in" },
    { name: "IDFC First Bank",     domain: "idfcfirst.bank.in" },
  ],
  publicBanks: [
    { name: "State Bank of India (SBI)", domain: "onlinesbi.sbi.bank.in" },
    { name: "Bank of Baroda",            domain: "bankofbaroda.com.sg" },
    { name: "Punjab National Bank (PNB)",domain: "pnbint.com" },
    { name: "Canara Bank",               domain: "canarabank.bank.in" },
    { name: "Union Bank of India",       domain: "unionbankofindia.bank.in" },
    { name: "Indian Bank",               domain: "indianbank.in" },
    { name: "Bank of India",             domain: "bankofindia.fr" },
    { name: "Central Bank of India",     domain: "centralbankofindia.co.in" },
  ],
  nbfcs: [
    { name: "Bajaj Finserv",              domain: "bajajfinserv.in" },
    { name: "Tata Capital",               domain: "tata.com" },
    { name: "Aditya Birla Finance",       domain: "adityabirlacapital.com" },
    { name: "L&T Finance",                domain: "ltfinance.com" },
    { name: "Piramal Finance",            domain: "piramalfinance.com" },
    { name: "Hero FinCorp",               domain: "herofincorp.com" },
    { name: "Cholamandalam Finance",      domain: "cholarisk.com" },
    { name: "Mahindra Finance",           domain: "mahindrafinance.com" },
    { name: "Shriram Finance",            domain: "shriramfinance.in" },
    { name: "Clix Capital",               domain: "clix.capital" },
    { name: "InCred Finance",             domain: "incred.com" },
    { name: "UGRO Capital",               domain: "ugrocapital.com" },
    { name: "IIFL Finance",               domain: "iifl.com" },
    { name: "Indiabulls Housing Finance", domain: "indiabullshomeloans.com" },
    { name: "Aavas Finance",              domain: "aavas.in" },
    { name: "PNB Housing Finance",        domain: "pnbhousing.com" },
    { name: "LIC Housing Finance",        domain: "lichousing.com" },
    { name: "Home First Finance",         domain: "homefirstindia.com" },
    { name: "Capri Global Capital",       domain: "capriglobal.in" },
  ],
};