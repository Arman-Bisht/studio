
"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

const MENU_DATA = {
  steaks: [
    { name: "Filet Mignon", desc: "Center-cut, melt-in-your-mouth tenderness. 8oz.", price: 34 },
    { name: "Bone-In Ribeye", desc: "Heavily marbled, hand-cut daily. 16oz.", price: 42 },
    { name: "Lakeside Sirloin", desc: "Top choice, flame-grilled to perfection.", price: 26 },
    { name: "Legacy Porterhouse", desc: "The king of steaks. Bone-in 24oz.", price: 58 },
  ],
  catch: [
    { name: "Grilled Salmon", desc: "Atlantic fresh, lemon butter, grilled asparagus.", price: 28 },
    { name: "Pan-Seared Sea Bass", desc: "Miso glazed, bok choy, wild rice.", price: 32 },
    { name: "Lake Trout Amandine", desc: "Locally sourced, toasted almonds, brown butter.", price: 24 },
    { name: "Lobster Tails", desc: "Two cold-water tails, drawn butter.", price: 45 },
  ],
  cocktails: [
    { name: "Sunset Gold Martini", desc: "Premium vodka, gold-leaf garnish, orange zest.", price: 16 },
    { name: "Lakeside Old Fashioned", desc: "Small batch bourbon, maple, black walnut bitters.", price: 14 },
    { name: "The Legacy Mule", desc: "Local ginger beer, botanical gin, fresh lime.", price: 12 },
    { name: "Crisp White Sangria", desc: "Seasonal fruits, Pinot Grigio, elderflower.", price: 11 },
  ],
  desserts: [
    { name: "Chocolate Lava Cake", desc: "Belgian cocoa, vanilla bean gelato.", price: 12 },
    { name: "Lakeside Cheesecake", desc: "Classic New York style, fresh berry compote.", price: 10 },
    { name: "Crème Brûlée", desc: "Madagascar vanilla, caramelized sugar crust.", price: 11 },
    { name: "Gold Dust Brownie", desc: "Warm fudge, salted caramel, edible gold.", price: 13 },
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
          <p className="text-white/60 text-sm tracking-[0.2em] uppercase mt-2">Crafted with Local Excellence</p>
        </DialogHeader>

        <Tabs defaultValue="steaks" className="flex flex-col h-full overflow-hidden">
          <div className="px-8 mt-6">
            <TabsList className="bg-white/5 w-full flex justify-between p-1 h-auto rounded-none border-b border-gold/20">
              <TabsTrigger value="steaks" className="flex-1 rounded-none py-3 data-[state=active]:bg-gold data-[state=active]:text-navy font-bold uppercase tracking-wider">Steaks</TabsTrigger>
              <TabsTrigger value="catch" className="flex-1 rounded-none py-3 data-[state=active]:bg-gold data-[state=active]:text-navy font-bold uppercase tracking-wider">Fresh Catch</TabsTrigger>
              <TabsTrigger value="cocktails" className="flex-1 rounded-none py-3 data-[state=active]:bg-gold data-[state=active]:text-navy font-bold uppercase tracking-wider">Cocktails</TabsTrigger>
              <TabsTrigger value="desserts" className="flex-1 rounded-none py-3 data-[state=active]:bg-gold data-[state=active]:text-navy font-bold uppercase tracking-wider">Desserts</TabsTrigger>
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
                          <span className="text-gold font-bold">${item.price}</span>
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
