"use client";

import { useState } from "react";

type CoffeeSupportProps = { variant: "header" | "contact" };

export default function CoffeeSupport({ variant }: CoffeeSupportProps) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(100);
  const [phone, setPhone] = useState("");

  return <>
    <button className={variant === "header" ? "coffee-action" : "coffee-contact-action"} type="button" onClick={() => setOpen(true)}>
      <span aria-hidden="true">♥</span>{variant === "header" ? "Buy me a coffee" : "Buy me a coffee"}
    </button>
    {open && <div className="coffee-modal-layer" role="presentation" onMouseDown={() => setOpen(false)}>
      <section className="coffee-modal" role="dialog" aria-modal="true" aria-labelledby="coffee-title" onMouseDown={(event) => event.stopPropagation()}>
        <header><div><p>Buy me a coffee</p><h2 id="coffee-title">Support my work</h2></div><button type="button" aria-label="Close support dialog" onClick={() => setOpen(false)}>×</button></header>
        <p className="coffee-description">Choose an amount and enter your M-Pesa number. A payment prompt can be sent once the payment service is connected.</p>
        <fieldset><legend>Choose an amount</legend><div className="amount-presets">{[100, 250, 500, 1000].map((value) => <button className={amount === value ? "selected" : ""} type="button" key={value} onClick={() => setAmount(value)}>KES {value.toLocaleString()}</button>)}</div></fieldset>
        <label htmlFor="coffee-phone">M-Pesa phone number</label><input id="coffee-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="0712 345 678" value={phone} onChange={(event) => setPhone(event.target.value)} />
        <small>Your number is used only to send an M-Pesa payment prompt.</small>
        <div className="coffee-actions"><a className="button primary" href="https://www.buymeacoffee.com/orengo" target="_blank" rel="noreferrer">Continue to Buy Me a Coffee <span>→</span></a><button className="button secondary" type="button" onClick={() => setOpen(false)}>Cancel</button></div>
      </section>
    </div>}
  </>;
}
