
"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"

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
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] md:h-[85vh] bg-navy border-gold/40 text-white p-0 overflow-hidden ring-0">
        {/* Thematic Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <Image 
            src="https://picsum.photos/seed/menu-bg/1200/800" 
            alt="Menu background" 
            fill 
            className="object-cover"
            data-ai-hint="lake texture"
          />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <DialogHeader className="p-6 md:p-8 pb-4 text-center border-b border-gold/20 pr-12 md:pr-16">
            <DialogTitle className="font-headline text-3xl md:text-5xl text-gold italic animate-in fade-in slide-in-from-top duration-700">
              The Legacy Menu
            </DialogTitle>
            <p className="text-white/60 text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.4em] uppercase mt-2 font-bold animate-in fade-in duration-1000 delay-300">
              Freshly Prepared • Lakeside Excellence
            </p>
          </DialogHeader>

          <Tabs defaultValue="baskets" className="flex flex-col h-full overflow-hidden">
            <div className="px-4 md:px-8 mt-4">
              <TabsList className="bg-white/5 w-full flex justify-between p-1 h-auto rounded-none border border-gold/20 animate-in fade-in zoom-in-95 duration-500 overflow-x-auto no-scrollbar">
                <TabsTrigger value="baskets" className="flex-1 min-w-[70px] rounded-none py-2 md:py-3 data-[state=active]:bg-gold data-[state=active]:text-navy font-bold uppercase tracking-wider transition-all duration-300 text-[10px] sm:text-sm">Baskets</TabsTrigger>
                <TabsTrigger value="specialties" className="flex-1 min-w-[70px] rounded-none py-2 md:py-3 data-[state=active]:bg-gold data-[state=active]:text-navy font-bold uppercase tracking-wider transition-all duration-300 text-[10px] sm:text-sm">Specialties</TabsTrigger>
                <TabsTrigger value="appetizers" className="flex-1 min-w-[70px] rounded-none py-2 md:py-3 data-[state=active]:bg-gold data-[state=active]:text-navy font-bold uppercase tracking-wider transition-all duration-300 text-[10px] sm:text-sm">Apps</TabsTrigger>
                <TabsTrigger value="drinks" className="flex-1 min-w-[70px] rounded-none py-2 md:py-3 data-[state=active]:bg-gold data-[state=active]:text-navy font-bold uppercase tracking-wider transition-all duration-300 text-[10px] sm:text-sm">Drinks</TabsTrigger>
              </TabsList>
            </div>

            <div className="flex-1 overflow-hidden relative">
              {Object.entries(MENU_DATA).map(([key, items]) => (
                <TabsContent key={key} value={key} className="h-full mt-0 focus-visible:ring-0">
                  <ScrollArea className="h-full px-4 md:px-8 py-6 md:py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-12">
                      {items.map((item, index) => (
                        <div 
                          key={item.name} 
                          className="flex flex-col gap-2 border-l-2 border-gold/10 pl-4 md:pl-6 group hover:border-gold transition-all duration-500 animate-in fade-in slide-in-from-left duration-500"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className="flex justify-between items-baseline gap-2 md:gap-4">
                            <h3 className="font-headline text-lg md:text-2xl text-white group-hover:text-gold transition-colors duration-300 leading-tight">
                              {item.name}
                            </h3>
                            <div className="flex-1 border-b border-white/10 border-dotted mb-1 hidden sm:block"></div>
                            <span className="text-gold font-bold text-base md:text-xl shrink-0">${item.price.toFixed(2)}</span>
                          </div>
                          <p className="text-white/50 text-xs md:text-sm italic font-light group-hover:text-white/80 transition-colors duration-300">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="h-24" />
                  </ScrollArea>
                </TabsContent>
              ))}
            </div>
          </Tabs>

          <div className="p-3 md:p-4 text-center border-t border-gold/20 bg-navy/80 backdrop-blur-sm">
            <p className="text-[8px] md:text-[10px] text-gold/40 uppercase tracking-[0.2em] md:tracking-[0.5em] px-4">
              Prices subject to change • Consuming raw or undercooked meats may increase your risk of foodborne illness.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
