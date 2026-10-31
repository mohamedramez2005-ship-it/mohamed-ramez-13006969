# Checkpoint A — generated for mohamedramez2005-ship-it

- Select orders from **Mansoura** with status **cancelled**.
- Summarize **revenue**.
- Order label: `{quantity} x {item} for {student}`.
- Missing order label: `Could not find order {id}`.
- JSON fields: `item`, `quantity`.

Export async `loadOrders`, `describeOrder`; and synchronous `myOrders`, `summarize`, `toJsonLines` from `solution.js`. The functions work on the provided orders DB.
