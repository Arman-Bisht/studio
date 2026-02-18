
"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

const MENU_DATA = {
  baskets: [
    { name: "Catfish Basket", desc: "Fresh catfish served with 1 side.", price: 13.50 },
    { name: "Wing Basket", desc: "Crispy wings served with 1 side.", price: 13.50 },
    { name: "Hamburger w/ Cheese", desc: "Juicy burger with cheese and 1 side.", price: 13.00 },
    { name: "Chicken Strip Basket", desc: "Tender chicken strips with 1 side.", price: 12.50 },
  ],
  specialties: [
    { name: "Loaded Potato", desc: "Butter, cheese, chives, sour cream. Choice of chopped brisket or chicken strips.", price: 15.00 },
    { name: "Brisket Fries", desc: "Golden fries topped with tender brisket and fixings.", price: 15.00 },
    { name: "Meat Nachos", desc: "Queso, meat, sour cream, onions, tomatoes.", price: 13.50 },
    { name: "Combo (Good for Two)", desc: "2 Meats and 3 Sides - A feast for the table.", price: 30.00 },
  ],
  appetizers: [
    { name: "Chips and Queso w/ meat", desc: "Warm queso with seasoned meat and crispy chips.", price: 10.00 },
    { name: "Chips and Salsa", desc: "House-made salsa with fresh tortilla chips.", price: 10.00 },
    { name: "Side Dish", desc: "Choice of Fries, House Salad, Baked Potato, or Green Beans.", price: 5.00 },
  ],
  drinks: [
    { name: "Soft Drinks", desc: "Sprite, Dr Pepper, Coke, or Lemonade.", price: 3.50 },
    { name: "Tea", desc: "Freshly brewed Sweet or Unsweet Tea.", price: 3.50 },
    { name: "Water", desc: "Bottled or iced water.", price: 3.50 },
  ]
}

export function MenuModal({ trigger }: { trigger: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] h-[80vh] bg-navy border-gold/30 text-white p-0">
        <DialogHeader className="p-8 pb-0 text-center">
          <DialogTitle className="font-headline text-4xl text-gold italic">Our Selection</DialogTitle>
          <p className="text-white/60 text-sm tracking-[0.2em] uppercase mt-2">Authentic Lakeside Flavors</p>
        </DialogHeader>

        <Tabs defaultValue="baskets" className="flex flex-col h-full overflow-hidden">
          <div className="px-8 mt-6">
            <TabsList className="bg-white/5 w-full flex justify-between p-1 h-auto rounded-none border-b border-gold/20">
              <TabsTrigger value="baskets" className="flex-1 rounded-none py-3 data-[state=active]:bg-gold data-[state=active]:text-navy font-bold uppercase tracking-wider">Baskets</TabsTrigger>
              <TabsTrigger value="specialties" className="flex-1 rounded-none py-3 data-[state=active]:bg-gold data-[state=active]:text-navy font-bold uppercase tracking-wider">Specialties</TabsTrigger>
              <TabsTrigger value="appetizers" className="flex-1 rounded-none py-3 data-[state=active]:bg-gold data-[state=active]:text-navy font-bold uppercase tracking-wider">Apps & Sides</TabsTrigger>
              <TabsTrigger value="drinks" className="flex-1 rounded-none py-3 data-[state=active]:bg-gold data-[state=active]:text-navy font-bold uppercase tracking-wider">Drinks</TabsTrigger>
            </TabsList>
          </div>

          <div className="flex-1 overflow-hidden relative">
            {Object.entries(MENU_DATA).map(([key, items]) => (
              <TabsContent key={key} value={key} className="h-full mt-0 focus-visible:ring-0">
                <ScrollArea className="h-full px-8 py-8">
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                    {items.map((item) => (
                      <div key={item.name} className="flex flex-col gap-1 border-l border-gold/20 pl-4 group hover:border-gold transition-colors">
                        <div className="flex justify-between items-baseline">
                          <h3 className="font-headline text-xl text-white group-hover:text-gold transition-colors">{item.name}</h3>
                          <span className="text-gold font-bold">${item.price.toFixed(2)}</span>
                        </div>
                        <p className="text-white/60 text-sm italic">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="h-20" /> {/* Spacer for scroll area */}
                </ScrollArea>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
