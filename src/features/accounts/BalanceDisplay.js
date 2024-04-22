import { useSelector } from "react-redux";

function formatCurrency(value, currency = "USD") {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: currency,
  }).format(value);
}

function BalanceDisplay() {
  const { balance } = useSelector((store) => store.account);
  return <div className="balance">{formatCurrency(balance)}</div>;
}

export { BalanceDisplay, formatCurrency };
