import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }


  cart: any = [];

  addToCart(i: any) {
    if (this.cart.length === 0) {
      this.cart.push(i);
      console.log(this.cart);
    } else {
      for (let i = 0; i < this.cart.length; i++) {
        if(this.cart[i].id === i){
        this.cart[i].quantity ++ ;
        console.log(this.cart);
        return;
      }
    }
    this.cart.push(i);
    console.log(this.cart);
  }
  }


  home = [
    {
      id: 1,
      name: "Puma Future Z 3.4 NJR-WordCup",
      img: 'https://product.hstatic.net/1000403328/product/01_837fcb6bca254569a6e5c22169793d70_master.jpg',
      information: 'RED/YELLOW LIMITED EDITION',
      price: 2000000,
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 2,
      name: "Puma Future Ultimate",
      img: 'https://product.hstatic.net/1000061481/product/anh_sp_add_web_2202-02-02-01_c8c3035826be40248108168d532da5d0_1024x1024.jpg',
      information: 'UPERCHARGE - BLUE GLIMMER/PUMA WHITE/ULTRA ORANGE',
      price: 2950000 ,
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 3,
      name: "Puma Future Z 1.4 ProCage",
      img: 'https://product.hstatic.net/1000061481/product/9c6e7775331e_4c651011f81542ee921f27adf16bb06b_1024x1024.jpeg',
      information: 'FEARLESS - FIERY CORAL/FIZZY LIGHT/PUMA BLACK/SALMON',
      price: 2890000,
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 4,
      name: "Puma Ultra Ultimate",
      img: 'https://product.hstatic.net/1000061481/product/01-01-01-02-02-02-01-02-4-01-01-01-3-02-02-02-01-01-01-2-02-2-01-01-01_bf2950f6718f4ad1a4c837a38776ae28_1024x1024.jpg',
      information: 'FEARLESS - FIERY CORAL/FIZZY LIGHT/PUMA BLACK',
      price: 2790000,
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 5,
      name: "Puma Ultra Ultimate",
      img: 'https://product.hstatic.net/1000061481/product/e42d1c4884fc_aebebc1c26cf4827864a311bc2ca3fb1_1024x1024.jpeg',
      information: 'FASTEST - FIZZY LIGHT/PARISIAN NIGHT/BLUE GLIMMER',
      price: 2650000,
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 6,
      name: "Puma Ultra 1.4 PrroCage",
      img: 'https://product.hstatic.net/1000061481/product/9a5f1ba84b07_51f29302b05f4b218efbf42254cbee5a_1024x1024.jpeg',
      information: 'NSTINCT - DIAMOND SILVER/NEON CITRUS',
      price: 2750000,
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 7,
      name: "Adidas X SpeedPorTal.1",
      img: 'https://product.hstatic.net/1000061481/product/0b42290b237d_8e4fd09a6093455f86e3705b27908fc0_1024x1024.jpeg',
      information: 'AL RIHLA - CLEAR AQUA/SOLAR RED/POWER BLUE',
      price: 2790000,
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 8,
      name: "Adidas X SpeedFlow.1",
      img: 'https://product.hstatic.net/1000061481/product/2a9d127b956d455b8694192b2b20a2c2_a620bac8fc7d4ef19997d5f427601373_1024x1024.jpeg',
      information: 'SAPPHIRE EDGE - SKY RUSH/SHOCK PINK/FOOTWEAR WHITE',
      price: 2490000,
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 9,
      name: "Adidas X Ghosted.1",
      img: 'https://product.hstatic.net/1000061481/product/bbddc6e12f8f46918915bca919cd8a60_1e39c0f9bce14166833969e84514e03a_1024x1024.jpg',
      information: 'SUPERLATIVE - SOLAR YELLOW/CORE BLACK/ROYAL BLUE',
      price: 2150000,
      sell: 'Hết hàng',
      quantity: 1,
    },

    {
      id: 10,
      name: "Nike Mercurial Vapor 15 Pro",
      img: 'https://product.hstatic.net/1000061481/product/anh_sp_add_web_2202-02-02-01-02-02-022-02-02-02-02-01-01-01-01_bc5dd718852e49749dac93c8036c6868_1024x1024.jpg',
      information: 'BLAST - WHITE/BALTIC BLUE/PINK BLAST',
      price: 2950000,
      sell: 'Mới về',
      quantity: 1,
    },

    {
      id: 11,
      name: "Nike Mercurial Vapor 14 Pro",
      img: 'https://product.hstatic.net/1000061481/product/0d7d8c7e3941_314b2b30716a4e36b1e044666d096489_1024x1024.jpeg',
      information: 'MOTIVATION - VOLT/BRIGHT CRIMSON/BLACK',
      price: 2650000,
      sell: 'Còn Hàng',
      quantity: 1,
    },

    {
      id: 12,
      name: "Nike Mercurial Vapor 14 Pro",
      img: 'https://product.hstatic.net/1000061481/product/0e318e3def4e_92405888c0064e73a7c76a041aaccbc6_1024x1024.jpeg',
      information: 'RECHARGE - SAPPHIRE/VOLT/BLUE VOID',
      price: 2650000,
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 13,
      name: "Nike Mercurial Vapor 15 Academy",
      img: 'https://product.hstatic.net/1000061481/product/anh_sp_add_web_2202-02-02-01-02_ae54869e51c248d29cc7c9ad446b0eee_1024x1024.jpg',
      information: 'BLAST - WHITE/BALTIC BLUE/PINK BLAST',
      price: 2190000,
      sell: 'mới về',
      quantity: 1,
    },

    {
      id: 14,
      name: "Nike Mercurial Vapor 15 Academy",
      img: 'https://product.hstatic.net/1000061481/product/2a148b5a3ce9_489fd21e09f243ed9e6e278ef5f7fa8c_1024x1024.jpeg',
      information: 'LUCENT - YELLOW STRIKE/SUNSET GLOW/DOLL',
      price: 2150000,
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 15,
      name: "Nike Mercurial Vapor 14 Academy",
      img: 'https://product.hstatic.net/1000061481/product/8acb7cfb818442a280c612cb9087ff9f_18eb3080725544b4b16a961a52324da9_1024x1024.jpg',
      information: 'IMPULSE - DYNAMIC TURQ/LIME GROW',
      price: 1690000,
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 16,
      name: "Tiempo Legend 9 Pro",
      img: 'https://product.hstatic.net/1000061481/product/anh_sp_add_web_2202-02-02-01-02-02-022-02-02-02-02-01-01-01_fa1617b7fc424724b9f140ae9d296bfd_1024x1024.jpg',
      information: 'BLAST - WHITE/BLACK/BALTIC BLUE/PINK BLAST',
      price: '2.750.000 Đồng',
      sell: 'Mới về',
      quantity: 1,
    },

    {
      id: 17,
      name: "Tiempo Legend 9 Pro",
      img: 'https://product.hstatic.net/1000061481/product/c0184731ad79_90c745817509456187ee801556b4ee50_1024x1024.jpeg',
      information: 'GENERATION - SPACE PURPLE/WHITE',
      price: '2.690.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 18,
      name: "Tiempo Legend 9 Pro",
      img: 'https://product.hstatic.net/1000061481/product/anh_sp_add_web_2-01-3_5fb12718c90b43d09a00d02c9ded4290_1024x1024.jpg',
      information: 'LUCENT - GREY/YELLOW STRIKE/SUNSET GLOW',
      price: '2.750.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 19,
      name: "Mizuno Alpha Pro",
      img: 'https://product.hstatic.net/1000061481/product/anh_sp_add_web_221345-02-01-02-02-01-01-011-01-01_fe807b46af4845c8ace3068efd937379_1024x1024.jpg',
      information: 'WHITE/PURPLE/RED',
      price: '3.050.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 20,
      name: "Mizuno Morelia Sala Made In Japan",
      img: 'https://product.hstatic.net/1000061481/product/-01-02-02-01-01-011-01-01-01-01-01-01-02-01-01-02-01-01-01-02-02-02-02_c73f7e5733254420b3b5859b5ca0b5e7_1024x1024.jpg',
      information: 'AZURE BLUE - BLUE/WHITE/COPPER',
      price: '4.050.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 21,
      name: "Mizono Morelia Neo III",
      img: 'https://product.hstatic.net/1000061481/product/-01-2-01-02-01-01-01-02-02-01-01-01-01-01-01-02-02-02-01-02-4-01-01-01_24e3267e14174ff2b502461c0f77d96f_1024x1024.jpg',
      information: 'LẠC VIỆT - RED/YELLOW LIMITED EDITION',
      price: '2.950.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 22,
      name: "Kamito TA11",
      img: 'https://product.hstatic.net/1000061481/product/2-02-02-02-02-02-02-02-02-01-01-01-01-01-01-01-01-02-01-02-01-01-01-02_da3f4ea9d416449396828b55b65aeb01_1024x1024.jpg',
      information: 'MAGIC - AQUA BLUE/GOLD',
      price: '690.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 23,
      name: "Kamito Velocidad",
      img: 'https://product.hstatic.net/1000061481/product/anh_sp_add_web_2-02_d9590b8c0cd442ee98ea082c5990799a_1024x1024.jpg',
      information: 'YELLOW/BLACK',
      price: '499.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,
    },
  ]

  adidas = [
    {
      id: 7,
      name: "Adidas X SpeedPorTal.1",
      img: 'https://product.hstatic.net/1000061481/product/0b42290b237d_8e4fd09a6093455f86e3705b27908fc0_1024x1024.jpeg',
      information: 'AL RIHLA - CLEAR AQUA/SOLAR RED/POWER BLUE',
      price: '2.790.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 8,
      name: "Adidas X SpeedFlow.1",
      img: 'https://product.hstatic.net/1000061481/product/2a9d127b956d455b8694192b2b20a2c2_a620bac8fc7d4ef19997d5f427601373_1024x1024.jpeg',
      information: 'SAPPHIRE EDGE - SKY RUSH/SHOCK PINK/FOOTWEAR WHITE',
      price: '2.490.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 9,
      name: "Adidas X Ghosted.1",
      img: 'https://product.hstatic.net/1000061481/product/bbddc6e12f8f46918915bca919cd8a60_1e39c0f9bce14166833969e84514e03a_1024x1024.jpg',
      information: 'SUPERLATIVE - SOLAR YELLOW/CORE BLACK/ROYAL BLUE',
      price: '2.150.000 Đồng',
      sell: 'Hết hàng',
      quantity: 1,
    },
  ]

  mizuno = [
    {
      id: 19,
      name: "Mizuno Alpha Pro",
      img: 'https://product.hstatic.net/1000061481/product/anh_sp_add_web_221345-02-01-02-02-01-01-011-01-01_fe807b46af4845c8ace3068efd937379_1024x1024.jpg',
      information: 'WHITE/PURPLE/RED',
      price: '3.050.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 20,
      name: "Mizuno Morelia Sala Made In Japan",
      img: 'https://product.hstatic.net/1000061481/product/-01-02-02-01-01-011-01-01-01-01-01-01-02-01-01-02-01-01-01-02-02-02-02_c73f7e5733254420b3b5859b5ca0b5e7_1024x1024.jpg',
      information: 'AZURE BLUE - BLUE/WHITE/COPPER',
      price: '4.050.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 21,
      name: "Mizono Morelia Neo III",
      img: 'https://product.hstatic.net/1000061481/product/-01-2-01-02-01-01-01-02-02-01-01-01-01-01-01-02-02-02-01-02-4-01-01-01_24e3267e14174ff2b502461c0f77d96f_1024x1024.jpg',
      information: 'LẠC VIỆT - RED/YELLOW LIMITED EDITION',
      price: '2.950.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,
    },
  ]

  nike = [
    {
      id: 10,
      name: "Nike Mercurial Vapor 15 Pro",
      img: 'https://product.hstatic.net/1000061481/product/anh_sp_add_web_2202-02-02-01-02-02-022-02-02-02-02-01-01-01-01_bc5dd718852e49749dac93c8036c6868_1024x1024.jpg',
      information: 'BLAST - WHITE/BALTIC BLUE/PINK BLAST',
      price: '2.950.000 Đồng',
      sell: 'Mới về',
      quantity: 1,
    },

    {
      id: 11,
      name: "Nike Mercurial Vapor 14 Pro",
      img: 'https://product.hstatic.net/1000061481/product/0d7d8c7e3941_314b2b30716a4e36b1e044666d096489_1024x1024.jpeg',
      information: 'MOTIVATION - VOLT/BRIGHT CRIMSON/BLACK',
      price: '2.650.000 Đồng',
      sell: 'Còn Hàng',
      quantity: 1,
    },

    {
      id: 12,
      name: "Nike Mercurial Vapor 14 Pro",
      img: 'https://product.hstatic.net/1000061481/product/0e318e3def4e_92405888c0064e73a7c76a041aaccbc6_1024x1024.jpeg',
      information: 'RECHARGE - SAPPHIRE/VOLT/BLUE VOID',
      price: '2.650.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 13,
      name: "Nike Mercurial Vapor 15 Academy",
      img: 'https://product.hstatic.net/1000061481/product/anh_sp_add_web_2202-02-02-01-02_ae54869e51c248d29cc7c9ad446b0eee_1024x1024.jpg',
      information: 'BLAST - WHITE/BALTIC BLUE/PINK BLAST',
      price: '2.190.000 Đồng',
      sell: 'mới về',
      quantity: 1,
    },

    {
      id: 14,
      name: "Nike Mercurial Vapor 15 Academy",
      img: 'https://product.hstatic.net/1000061481/product/2a148b5a3ce9_489fd21e09f243ed9e6e278ef5f7fa8c_1024x1024.jpeg',
      information: 'LUCENT - YELLOW STRIKE/SUNSET GLOW/DOLL',
      price: '2.150.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 15,
      name: "Nike Mercurial Vapor 14 Academy",
      img: 'https://product.hstatic.net/1000061481/product/8acb7cfb818442a280c612cb9087ff9f_18eb3080725544b4b16a961a52324da9_1024x1024.jpg',
      information: 'IMPULSE - DYNAMIC TURQ/LIME GROW',
      price: '1.690.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 16,
      name: "Tiempo Legend 9 Pro",
      img: 'https://product.hstatic.net/1000061481/product/anh_sp_add_web_2202-02-02-01-02-02-022-02-02-02-02-01-01-01_fa1617b7fc424724b9f140ae9d296bfd_1024x1024.jpg',
      information: 'BLAST - WHITE/BLACK/BALTIC BLUE/PINK BLAST',
      price: '2.750.000 Đồng',
      sell: 'Mới về',
      quantity: 1,
    },

    {
      id: 17,
      name: "Tiempo Legend 9 Pro",
      img: 'https://product.hstatic.net/1000061481/product/c0184731ad79_90c745817509456187ee801556b4ee50_1024x1024.jpeg',
      information: 'GENERATION - SPACE PURPLE/WHITE',
      price: '2.690.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 18,
      name: "Tiempo Legend 9 Pro",
      img: 'https://product.hstatic.net/1000061481/product/anh_sp_add_web_2-01-3_5fb12718c90b43d09a00d02c9ded4290_1024x1024.jpg',
      information: 'LUCENT - GREY/YELLOW STRIKE/SUNSET GLOW',
      price: '2.750.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,
    },
  ]

  puma = [
    {
      id: 1,
      name: "Puma Future Z 3.4 NJR-WordCup",
      img: 'https://product.hstatic.net/1000403328/product/01_837fcb6bca254569a6e5c22169793d70_master.jpg',
      information: 'RED/YELLOW LIMITED EDITION',
      price: '2.000.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 2,
      name: "Puma Future Ultimate",
      img: 'https://product.hstatic.net/1000061481/product/anh_sp_add_web_2202-02-02-01_c8c3035826be40248108168d532da5d0_1024x1024.jpg',
      information: 'UPERCHARGE - BLUE GLIMMER/PUMA WHITE/ULTRA ORANGE',
      price: '2.950.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 3,
      name: "Puma Future Z 1.4 ProCage",
      img: 'https://product.hstatic.net/1000061481/product/9c6e7775331e_4c651011f81542ee921f27adf16bb06b_1024x1024.jpeg',
      information: 'FEARLESS - FIERY CORAL/FIZZY LIGHT/PUMA BLACK/SALMON',
      price: '2.890.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 4,
      name: "Puma Ultra Ultimate",
      img: 'https://product.hstatic.net/1000061481/product/01-01-01-02-02-02-01-02-4-01-01-01-3-02-02-02-01-01-01-2-02-2-01-01-01_bf2950f6718f4ad1a4c837a38776ae28_1024x1024.jpg',
      information: 'FEARLESS - FIERY CORAL/FIZZY LIGHT/PUMA BLACK',
      price: '2.790.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,
    },

    {
      id: 5,
      name: "Puma Ultra Ultimate",
      img: 'https://product.hstatic.net/1000061481/product/e42d1c4884fc_aebebc1c26cf4827864a311bc2ca3fb1_1024x1024.jpeg',
      information: 'FASTEST - FIZZY LIGHT/PARISIAN NIGHT/BLUE GLIMMER',
      price: '2.650.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,

    },

    {
      id: 6,
      name: "Puma Ultra 1.4 PrroCage",
      img: 'https://product.hstatic.net/1000061481/product/9a5f1ba84b07_51f29302b05f4b218efbf42254cbee5a_1024x1024.jpeg',
      information: 'NSTINCT - DIAMOND SILVER/NEON CITRUS',
      price: '2.750.000 Đồng',
      sell: 'Còn hàng',
      quantity: 1,

    },

  ]
}
