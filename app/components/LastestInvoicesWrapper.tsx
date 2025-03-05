import { fetchLatestInvoices } from "../helpers/data";
import { LatestInvoices } from "anjrot-components";

const LastestInvoicesWrapper = async() => {
    const fetchInvoices = await fetchLatestInvoices();
    console.log(fetchInvoices)
    return <LatestInvoices latestInvoices={fetchInvoices} className="bg-slate-700" footer={{className: "text-white"}}/>
};

export default LastestInvoicesWrapper;