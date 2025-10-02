# Mini Order Book UI

A modern, responsive order book interface built with Next.js, TypeScript, and Tailwind CSS. Features a cybernetic design with dark/light mode support.

## Features

- **Real-time Order Display**: Shows buy orders (bids) and sell orders (asks) in separate tables
- **Automatic Sorting**: Bids sorted descending by price, asks ascending
- **Best Price Highlighting**: Highlights the highest bid and lowest ask
- **Responsive Design**: Side-by-side tables on desktop, stacked on mobile
- **Cybernetic Theme**: Neon green/red color scheme with glowing effects
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Card-based UI**: Modern card design with shadows and rounded corners
- **Grid Borders**: Clean table structure with proper borders

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open** [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and theme variables
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main page component
├── components/
│   ├── OrderBook.tsx        # Main order book layout
│   ├── OrderBookTable.tsx   # Reusable table component
│   ├── ThemeToggle.tsx      # Dark/light mode toggle
│   └── ui/                  # shadcn/ui components
├── lib/
│   └── utils.ts             # Utility functions
└── README.md
```

## Data Structure

The order book uses hardcoded data with the following structure:

```typescript
interface Order {
  price: number;
  amount: number;
}

interface OrderBookData {
  bids: Order[];
  asks: Order[];
}
```

## Customization

- **Colors**: Modify the cybernetic color scheme in `components/OrderBookTable.tsx`
- **Data**: Update the hardcoded data in `components/OrderBookTable.tsx`
- **Styling**: Adjust Tailwind classes for different themes
- **Limits**: Change the number of displayed orders via the `limit` prop

## Deploy on Vercel

Deploy easily using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/mini-order-book-ui)

## License

This project is open source and available under the [MIT License](LICENSE).
