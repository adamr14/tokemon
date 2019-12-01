var philly = function(x, y, size){
    this.position = new createVector(x, y);
    this.size=size;
	this.head = [[183.0625, 19.25, 0],[177.9375, 24.75, 0],[173.421875, 30.328125, 0],[169.515625, 35.984375, 0],[166.21875, 41.71875, 0],[163.53125, 47.53125, 0],[161.453125, 53.421875, 0],[159.984375, 59.390625, 0],[159.125, 65.4375, 0],[158.875, 71.5625, 0],[158.6875, 77.734375, 0],[158.5625, 83.953125, 0],[158.5, 90.21875, 0],[158.5, 96.53125, 0],[158.5625, 102.890625, 0],[158.6875, 109.296875, 0],[158.875, 115.75, 0],[159.125, 122.25, 0],[159.953125, 127.9375, 0],[161.359375, 132.8125, 0],[163.34375, 136.875, 0],[165.90625, 140.125, 0],[169.046875, 142.5625, 0],[172.765625, 144.1875, 0],[177.0625, 145, 0],[181.9375, 145, 0],[186.875, 144.953125, 0],[191.875, 144.859375, 0],[196.9375, 144.71875, 0],[202.0625, 144.53125, 0],[207.25, 144.296875, 0],[212.5, 144.015625, 0],[217.8125, 143.6875, 0],[223.1875, 143.3125, 0],[227.890625, 142.25, 0],[231.921875, 140.5, 0],[235.28125, 138.0625, 0],[237.96875, 134.9375, 0],[239.984375, 131.125, 0],[241.328125, 126.625, 0],[242, 121.4375, 0],[242, 115.5625, 0],[242, 109.625, 0],[242, 103.625, 0],[242, 97.5625, 0],[242, 91.4375, 0],[242, 85.25, 0],[242, 79, 0],[242, 72.6875, 0],[242, 66.3125, 0],[241.359375, 60.046875, 0],[240.078125, 53.890625, 0],[238.15625, 47.84375, 0],[235.59375, 41.90625, 0],[233.03125, 36.765625, 0],[230.46875, 32.421875, 0],[227.90625, 28.875, 0],[225.34375, 26.125, 0],[221.5, 23.375, 0],[216.375, 20.625, 0],[211.890625, 18.5625, 0],[208.046875, 17.1875, 0],[201, 16.5, 0],[195.875, 16.5, 0]];
	this.body = [[177.4375, 150.9375, 0],[171.5625, 152.0625, 0],[166.015625, 153.515625, 0],[160.796875, 155.296875, 0],[155.90625, 157.40625, 0],[151.34375, 159.84375, 0],[147.109375, 162.609375, 0],[143.203125, 165.703125, 0],[139.625, 169.125, 0],[136.375, 172.875, 0],[133.171875, 176.765625, 0],[130.015625, 180.796875, 0],[126.90625, 184.96875, 0],[123.84375, 189.28125, 0],[120.828125, 193.734375, 0],[117.859375, 198.328125, 0],[114.9375, 203.0625, 0],[112.0625, 207.9375, 0],[109.53125, 212.828125, 0],[107.34375, 217.734375, 0],[105.5, 222.65625, 0],[104, 227.59375, 0],[102.84375, 232.546875, 0],[102.03125, 237.515625, 0],[101.5625, 242.5, 0],[101.4375, 247.5, 0],[101.703125, 252.265625, 0],[102.359375, 256.796875, 0],[103.40625, 261.09375, 0],[104.84375, 265.15625, 0],[106.671875, 268.984375, 0],[108.890625, 272.578125, 0],[111.5, 275.9375, 0],[114.5, 279.0625, 0],[117.890625, 281.921875, 0],[121.671875, 284.515625, 0],[125.84375, 286.84375, 0],[130.40625, 288.90625, 0],[135.359375, 290.703125, 0],[140.703125, 292.234375, 0],[146.4375, 293.5, 0],[152.5625, 294.5, 0],[158.6875, 295.390625, 0],[164.8125, 296.171875, 0],[170.9375, 296.84375, 0],[177.0625, 297.40625, 0],[183.1875, 297.859375, 0],[189.3125, 298.203125, 0],[195.4375, 298.4375, 0],[201.5625, 298.5625, 0],[207.734375, 298.5625, 0],[213.953125, 298.4375, 0],[220.21875, 298.1875, 0],[226.53125, 297.8125, 0],[232.890625, 297.3125, 0],[239.296875, 296.6875, 0],[245.75, 295.9375, 0],[252.25, 295.0625, 0],[258.34375, 293.828125, 0],[264.03125, 292.234375, 0],[269.3125, 290.28125, 0],[274.1875, 287.96875, 0],[278.65625, 285.296875, 0],[282.71875, 282.265625, 0],[286.375, 278.875, 0],[289.625, 275.125, 0],[292.46875, 271.234375, 0],[294.90625, 267.203125, 0],[296.9375, 263.03125, 0],[298.5625, 258.71875, 0],[299.78125, 254.265625, 0],[300.59375, 249.671875, 0],[301, 244.9375, 0],[301, 240.0625, 0],[300.578125, 235.203125, 0],[299.734375, 230.359375, 0],[298.46875, 225.53125, 0],[296.78125, 220.71875, 0],[294.671875, 215.921875, 0],[292.140625, 211.140625, 0],[289.1875, 206.375, 0],[285.8125, 201.625, 0],[282.453125, 196.953125, 0],[279.109375, 192.359375, 0],[275.78125, 187.84375, 0],[272.46875, 183.40625, 0],[269.171875, 179.046875, 0],[265.890625, 174.765625, 0],[262.625, 170.5625, 0],[259.375, 166.4375, 0],[255.75, 162.75, 0],[251.75, 159.5, 0],[247.375, 156.6875, 0],[242.625, 154.3125, 0],[238.28125, 152.453125, 0],[234.34375, 151.109375, 0],[230.8125, 150.28125, 0],[227.6875, 149.96875, 0],[223.046875, 149.71875, 0],[216.890625, 149.53125, 0],[211.515625, 149.421875, 0],[206.921875, 149.390625, 0],[198.5625, 149.625, 0],[192.5, 149.875, 0]];   
    this.leftArm = [[125.4375, 150.9375, 0],[115.5625, 152.0625, 0],[106.5, 153.65625, 0],[98.25, 155.71875, 0],[90.8125, 158.25, 0],[84.1875, 161.25, 0],[78.375, 164.71875, 0],[73.375, 168.65625, 0],[69.1875, 173.0625, 0],[65.8125, 177.9375, 0],[62.78125, 183.046875, 0],[60.09375, 188.390625, 0],[57.75, 193.96875, 0],[55.75, 199.78125, 0],[54.09375, 205.828125, 0],[52.78125, 212.109375, 0],[51.8125, 218.625, 0],[51.1875, 225.375, 0],[50.640625, 231.875, 0],[50.171875, 238.125, 0],[49.78125, 244.125, 0],[49.46875, 249.875, 0],[49.234375, 255.375, 0],[49.078125, 260.625, 0],[49, 265.625, 0],[49, 270.375, 0],[49.390625, 274.890625, 0],[50.171875, 279.171875, 0],[51.34375, 283.21875, 0],[52.90625, 287.03125, 0],[54.859375, 290.609375, 0],[57.203125, 293.953125, 0],[59.9375, 297.0625, 0],[63.0625, 299.9375, 0],[66.125, 302.140625, 0],[69.125, 303.671875, 0],[72.0625, 304.53125, 0],[74.9375, 304.71875, 0],[77.75, 304.234375, 0],[80.5, 303.078125, 0],[83.1875, 301.25, 0],[85.8125, 298.75, 0],[88.1875, 296.125, 0],[90.3125, 293.375, 0],[92.1875, 290.5, 0],[93.8125, 287.5, 0],[95.1875, 284.375, 0],[96.3125, 281.125, 0],[97.1875, 277.75, 0],[97.8125, 274.25, 0],[98.40625, 270.578125, 0],[98.96875, 266.734375, 0],[99.5, 262.71875, 0],[100, 258.53125, 0],[100.46875, 254.171875, 0],[100.90625, 249.640625, 0],[101.3125, 244.9375, 0],[101.6875, 240.0625, 0],[102.328125, 235.21875, 0],[103.234375, 230.40625, 0],[104.40625, 225.625, 0],[105.84375, 220.875, 0],[107.546875, 216.15625, 0],[109.515625, 211.46875, 0],[111.75, 206.8125, 0],[114.25, 202.1875, 0],[116.859375, 197.65625, 0],[119.578125, 193.21875, 0],[122.40625, 188.875, 0],[125.34375, 184.625, 0],[128.390625, 180.46875, 0],[131.546875, 176.40625, 0],[134.8125, 172.4375, 0],[138.1875, 168.5625, 0],[141.296875, 165.046875, 0],[144.140625, 161.890625, 0],[146.71875, 159.09375, 0],[149.03125, 156.65625, 0],[150.921875, 154.703125, 0],[152.390625, 153.234375, 0],[153.4375, 152.25, 0],[154.0625, 151.75, 0],[153.609375, 151.265625, 0],[152.078125, 150.796875, 0],[150.390625, 150.453125, 0],[148.546875, 150.234375, 0],[143.3125, 150.1875, 0],[139, 150.25, 0]];	
	this.rightArm = [[274.875, 148.375, 0],[285.125, 149.625, 0],[294.484375, 151.34375, 0],[302.953125, 153.53125, 0],[310.53125, 156.1875, 0],[317.21875, 159.3125, 0],[323.015625, 162.90625, 0],[327.921875, 166.96875, 0],[331.9375, 171.5, 0],[335.0625, 176.5, 0],[337.859375, 181.78125, 0],[340.328125, 187.34375, 0],[342.46875, 193.1875, 0],[344.28125, 199.3125, 0],[345.765625, 205.71875, 0],[346.921875, 212.40625, 0],[347.75, 219.375, 0],[348.25, 226.625, 0],[348.671875, 233.5625, 0],[349.015625, 240.1875, 0],[349.28125, 246.5, 0],[349.46875, 252.5, 0],[349.578125, 258.1875, 0],[349.609375, 263.5625, 0],[349.5625, 268.625, 0],[349.4375, 273.375, 0],[348.859375, 277.859375, 0],[347.828125, 282.078125, 0],[346.34375, 286.03125, 0],[344.40625, 289.71875, 0],[342.015625, 293.140625, 0],[339.171875, 296.296875, 0],[335.875, 299.1875, 0],[332.125, 301.8125, 0],[328.59375, 303.78125, 0],[325.28125, 305.09375, 0],[322.1875, 305.75, 0],[319.3125, 305.75, 0],[316.65625, 305.09375, 0],[314.21875, 303.78125, 0],[312, 301.8125, 0],[310, 299.1875, 0],[308.203125, 296.5, 0],[306.609375, 293.75, 0],[305.21875, 290.9375, 0],[304.03125, 288.0625, 0],[303.046875, 285.125, 0],[302.265625, 282.125, 0],[301.6875, 279.0625, 0],[301.3125, 275.9375, 0],[300.953125, 272.59375, 0],[300.609375, 269.03125, 0],[300.28125, 265.25, 0],[299.96875, 261.25, 0],[299.671875, 257.03125, 0],[299.390625, 252.59375, 0],[299.125, 247.9375, 0],[298.875, 243.0625, 0],[298.296875, 238.125, 0],[297.390625, 233.125, 0],[296.15625, 228.0625, 0],[294.59375, 222.9375, 0],[292.703125, 217.75, 0],[290.484375, 212.5, 0],[287.9375, 207.1875, 0],[285.0625, 201.8125, 0],[282.203125, 196.6875, 0],[279.359375, 191.8125, 0],[276.53125, 187.1875, 0],[273.71875, 182.8125, 0],[270.921875, 178.6875, 0],[268.140625, 174.8125, 0],[265.375, 171.1875, 0],[262.625, 167.8125, 0],[260, 164.671875, 0],[257.5, 161.765625, 0],[255.125, 159.09375, 0],[252.875, 156.65625, 0],[250.96875, 154.640625, 0],[249.40625, 153.046875, 0],[248.1875, 151.875, 0],[247.3125, 151.125, 0],[247.5, 150.34375, 0],[248.75, 149.53125, 0],[250.21875, 148.90625, 0],[251.90625, 148.46875, 0],[257, 148.125, 0],[261.25, 148, 0]];
	this.legs = [[122.4375, 228.8125, 0],[128.5625, 230.1875, 0],[135, 231.375, 0],[141.75, 232.375, 0],[148.8125, 233.1875, 0],[156.1875, 233.8125, 0],[163.875, 234.25, 0],[171.875, 234.5, 0],[180.1875, 234.5625, 0],[188.8125, 234.4375, 0],[197.25, 234.125, 0],[205.5, 233.625, 0],[213.5625, 232.9375, 0],[221.4375, 232.0625, 0],[229.125, 231, 0],[236.625, 229.75, 0],[243.9375, 228.3125, 0],[251.0625, 226.6875, 0],[257.78125, 225.125, 0],[264.09375, 223.625, 0],[270, 222.1875, 0],[275.5, 220.8125, 0],[280.59375, 219.5, 0],[285.28125, 218.25, 0],[289.5625, 217.0625, 0],[293.4375, 215.9375, 0],[296.90625, 215.703125, 0],[299.96875, 216.359375, 0],[302.625, 217.90625, 0],[304.875, 220.34375, 0],[306.71875, 223.671875, 0],[308.15625, 227.890625, 0],[309.1875, 233, 0],[309.8125, 239, 0],[310.171875, 244.796875, 0],[310.265625, 250.390625, 0],[310.09375, 255.78125, 0],[309.65625, 260.96875, 0],[308.953125, 265.953125, 0],[307.984375, 270.734375, 0],[306.75, 275.3125, 0],[305.25, 279.6875, 0],[303.875, 284.109375, 0],[302.625, 288.578125, 0],[301.5, 293.09375, 0],[300.5, 297.65625, 0],[299.625, 302.265625, 0],[298.875, 306.921875, 0],[298.25, 311.625, 0],[297.75, 316.375, 0],[297.609375, 320.796875, 0],[297.828125, 324.890625, 0],[298.40625, 328.65625, 0],[299.34375, 332.09375, 0],[300.640625, 335.203125, 0],[302.296875, 337.984375, 0],[304.3125, 340.4375, 0],[306.6875, 342.5625, 0],[309.21875, 344.390625, 0],[311.90625, 345.921875, 0],[314.75, 347.15625, 0],[317.75, 348.09375, 0],[320.90625, 348.734375, 0],[324.21875, 349.078125, 0],[327.6875, 349.125, 0],[331.3125, 348.875, 0],[334.625, 348.90625, 0],[337.625, 349.21875, 0],[340.3125, 349.8125, 0],[342.6875, 350.6875, 0],[344.75, 351.84375, 0],[346.5, 353.28125, 0],[347.9375, 355, 0],[349.0625, 357, 0],[349.46875, 359, 0],[349.15625, 361, 0],[348.125, 363, 0],[346.375, 365, 0],[343.90625, 367, 0],[340.71875, 369, 0],[336.8125, 371, 0],[332.1875, 373, 0],[327.28125, 374.609375, 0],[322.09375, 375.828125, 0],[316.625, 376.65625, 0],[310.875, 377.09375, 0],[304.84375, 377.140625, 0],[298.53125, 376.796875, 0],[291.9375, 376.0625, 0],[285.0625, 374.9375, 0],[278.546875, 373.734375, 0],[272.390625, 372.453125, 0],[266.59375, 371.09375, 0],[261.15625, 369.65625, 0],[256.078125, 368.140625, 0],[251.359375, 366.546875, 0],[247, 364.875, 0],[243, 363.125, 0],[238.890625, 361.296875, 0],[234.671875, 359.390625, 0],[230.34375, 357.40625, 0],[225.90625, 355.34375, 0],[221.359375, 353.203125, 0],[216.703125, 350.984375, 0],[211.9375, 348.6875, 0],[207.0625, 346.3125, 0],[202.375, 343.78125, 0],[197.875, 341.09375, 0],[193.5625, 338.25, 0],[189.4375, 335.25, 0],[185.5, 332.09375, 0],[181.75, 328.78125, 0],[178.1875, 325.3125, 0],[174.8125, 321.6875, 0],[171.40625, 318.125, 0],[167.96875, 314.625, 0],[164.5, 311.1875, 0],[161, 307.8125, 0],[157.46875, 304.5, 0],[153.90625, 301.25, 0],[150.3125, 298.0625, 0],[146.6875, 294.9375, 0],[143.09375, 291.734375, 0],[139.53125, 288.453125, 0],[136, 285.09375, 0],[132.5, 281.65625, 0],[129.03125, 278.140625, 0],[125.59375, 274.546875, 0],[122.1875, 270.875, 0],[118.8125, 267.125, 0],[115.765625, 263.375, 0],[113.046875, 259.625, 0],[110.65625, 255.875, 0],[108.59375, 252.125, 0],[106.953125, 248.84375, 0],[105.734375, 246.03125, 0],[104.9375, 243.6875, 0],[104.5625, 241.8125, 0],[104.859375, 239.640625, 0],[105.828125, 237.171875, 0],[106.890625, 235.171875, 0],[108.046875, 233.640625, 0],[111.3125, 231.6875, 0],[114, 230.5, 0]];
	this.leftSleeve = [[149.5625, 142.9375, 0],[143.4375, 144.0625, 0],[137.359375, 145.21875, 0],[131.328125, 146.40625, 0],[125.34375, 147.625, 0],[119.40625, 148.875, 0],[113.515625, 150.15625, 0],[107.671875, 151.46875, 0],[101.875, 152.8125, 0],[96.125, 154.1875, 0],[90.828125, 155.6875, 0],[85.984375, 157.3125, 0],[81.59375, 159.0625, 0],[77.65625, 160.9375, 0],[74.171875, 162.9375, 0],[71.140625, 165.0625, 0],[68.5625, 167.3125, 0],[66.4375, 169.6875, 0],[64.40625, 172.109375, 0],[62.46875, 174.578125, 0],[60.625, 177.09375, 0],[58.875, 179.65625, 0],[57.21875, 182.265625, 0],[55.65625, 184.921875, 0],[54.1875, 187.625, 0],[52.8125, 190.375, 0],[52.171875, 192.703125, 0],[52.265625, 194.609375, 0],[53.09375, 196.09375, 0],[54.65625, 197.15625, 0],[56.953125, 197.796875, 0],[59.984375, 198.015625, 0],[63.75, 197.8125, 0],[68.25, 197.1875, 0],[72.65625, 196.6875, 0],[76.96875, 196.3125, 0],[81.1875, 196.0625, 0],[85.3125, 195.9375, 0],[89.34375, 195.9375, 0],[93.28125, 196.0625, 0],[97.125, 196.3125, 0],[100.875, 196.6875, 0],[104.5625, 196.734375, 0],[108.1875, 196.453125, 0],[111.75, 195.84375, 0],[115.25, 194.90625, 0],[118.6875, 193.640625, 0],[122.0625, 192.046875, 0],[125.375, 190.125, 0],[128.625, 187.875, 0],[131.84375, 185.4375, 0],[135.03125, 182.8125, 0],[138.1875, 180, 0],[141.3125, 177, 0],[144.40625, 173.8125, 0],[147.46875, 170.4375, 0],[150.5, 166.875, 0],[153.5, 163.125, 0],[156.234375, 159.671875, 0],[158.703125, 156.515625, 0],[160.90625, 153.65625, 0],[162.84375, 151.09375, 0],[164.40625, 149, 0],[165.59375, 147.375, 0],[166.40625, 146.21875, 0],[166.84375, 145.53125, 0],[166.625, 144.8125, 0],[165.75, 144.0625, 0],[164.765625, 143.484375, 0],[163.671875, 143.078125, 0],[160.5, 142.75, 0],[157.875, 142.625, 0]];
	this.rightSleeve = [[255.625, 142.6875, 0],[262.375, 144.3125, 0],[268.828125, 145.84375, 0],[274.984375, 147.28125, 0],[280.84375, 148.625, 0],[286.40625, 149.875, 0],[291.671875, 151.03125, 0],[296.640625, 152.09375, 0],[301.3125, 153.0625, 0],[305.6875, 153.9375, 0],[309.828125, 154.9375, 0],[313.734375, 156.0625, 0],[317.40625, 157.3125, 0],[320.84375, 158.6875, 0],[324.046875, 160.1875, 0],[327.015625, 161.8125, 0],[329.75, 163.5625, 0],[332.25, 165.4375, 0],[334.515625, 167.421875, 0],[336.546875, 169.515625, 0],[338.34375, 171.71875, 0],[339.90625, 174.03125, 0],[341.234375, 176.453125, 0],[342.328125, 178.984375, 0],[343.1875, 181.625, 0],[343.8125, 184.375, 0],[344.015625, 186.921875, 0],[343.796875, 189.265625, 0],[343.15625, 191.40625, 0],[342.09375, 193.34375, 0],[340.609375, 195.078125, 0],[338.703125, 196.609375, 0],[336.375, 197.9375, 0],[333.625, 199.0625, 0],[330.859375, 200, 0],[328.078125, 200.75, 0],[325.28125, 201.3125, 0],[322.46875, 201.6875, 0],[319.640625, 201.875, 0],[316.796875, 201.875, 0],[313.9375, 201.6875, 0],[311.0625, 201.3125, 0],[308.09375, 200.796875, 0],[305.03125, 200.140625, 0],[301.875, 199.34375, 0],[298.625, 198.40625, 0],[295.28125, 197.328125, 0],[291.84375, 196.109375, 0],[288.3125, 194.75, 0],[284.6875, 193.25, 0],[281.078125, 191.515625, 0],[277.484375, 189.546875, 0],[273.90625, 187.34375, 0],[270.34375, 184.90625, 0],[266.796875, 182.234375, 0],[263.265625, 179.328125, 0],[259.75, 176.1875, 0],[256.25, 172.8125, 0],[253, 169.484375, 0],[250, 166.203125, 0],[247.25, 162.96875, 0],[244.75, 159.78125, 0],[242.6875, 157.015625, 0],[241.0625, 154.671875, 0],[239.875, 152.75, 0],[239.125, 151.25, 0],[239.03125, 149.578125, 0],[239.59375, 147.734375, 0],[240.34375, 146.265625, 0],[241.28125, 145.171875, 0],[244.375, 143.9375, 0],[247, 143.25, 0]];
    this.shirt = [[165.375, 160.625, 0],[170.625, 163.375, 0],[175.671875, 165.828125, 0],[180.515625, 167.984375, 0],[185.15625, 169.84375, 0],[189.59375, 171.40625, 0],[193.828125, 172.671875, 0],[197.859375, 173.640625, 0],[201.6875, 174.3125, 0],[205.3125, 174.6875, 0],[209.09375, 174.59375, 0],[213.03125, 174.03125, 0],[217.125, 173, 0],[221.375, 171.5, 0],[225.78125, 169.53125, 0],[230.34375, 167.09375, 0],[235.0625, 164.1875, 0],[239.9375, 160.8125, 0],[244.5625, 158.40625, 0],[248.9375, 156.96875, 0],[253.0625, 156.5, 0],[256.9375, 157, 0],[260.5625, 158.46875, 0],[263.9375, 160.90625, 0],[267.0625, 164.3125, 0],[269.9375, 168.6875, 0],[272.765625, 173.15625, 0],[275.546875, 177.71875, 0],[278.28125, 182.375, 0],[280.96875, 187.125, 0],[283.609375, 191.96875, 0],[286.203125, 196.90625, 0],[288.75, 201.9375, 0],[291.25, 207.0625, 0],[293.421875, 212.109375, 0],[295.265625, 217.078125, 0],[296.78125, 221.96875, 0],[297.96875, 226.78125, 0],[298.828125, 231.515625, 0],[299.359375, 236.171875, 0],[299.5625, 240.75, 0],[299.4375, 245.25, 0],[298.703125, 249.390625, 0],[297.359375, 253.171875, 0],[295.40625, 256.59375, 0],[292.84375, 259.65625, 0],[289.671875, 262.359375, 0],[285.890625, 264.703125, 0],[281.5, 266.6875, 0],[276.5, 268.3125, 0],[271.375, 269.75, 0],[266.125, 271, 0],[260.75, 272.0625, 0],[255.25, 272.9375, 0],[249.625, 273.625, 0],[243.875, 274.125, 0],[238, 274.4375, 0],[232, 274.5625, 0],[226.078125, 274.65625, 0],[220.234375, 274.71875, 0],[214.46875, 274.75, 0],[208.78125, 274.75, 0],[203.171875, 274.71875, 0],[197.640625, 274.65625, 0],[192.1875, 274.5625, 0],[186.8125, 274.4375, 0],[181.046875, 274.109375, 0],[174.890625, 273.578125, 0],[168.34375, 272.84375, 0],[161.40625, 271.90625, 0],[154.078125, 270.765625, 0],[146.359375, 269.421875, 0],[138.25, 267.875, 0],[129.75, 266.125, 0],[122.3125, 264, 0],[115.9375, 261.5, 0],[110.625, 258.625, 0],[106.375, 255.375, 0],[103.1875, 251.75, 0],[101.0625, 247.75, 0],[100, 243.375, 0],[100, 238.625, 0],[100.3125, 233.859375, 0],[100.9375, 229.078125, 0],[101.875, 224.28125, 0],[103.125, 219.46875, 0],[104.6875, 214.640625, 0],[106.5625, 209.796875, 0],[108.75, 204.9375, 0],[111.25, 200.0625, 0],[113.859375, 195.296875, 0],[116.578125, 190.640625, 0],[119.40625, 186.09375, 0],[122.34375, 181.65625, 0],[124.96875, 177.828125, 0],[127.28125, 174.609375, 0],[129.28125, 172, 0],[130.96875, 170, 0],[133.734375, 167.84375, 0],[137.578125, 165.53125, 0],[141, 163.71875, 0],[144, 162.40625, 0],[149.8125, 161.125, 0],[154.125, 160.5, 0]];
	this.hat = [[180.125, 2.1875, 0],[175.875, 2.8125, 0],[172.03125, 3.703125, 0],[168.59375, 4.859375, 0],[165.5625, 6.28125, 0],[162.9375, 7.96875, 0],[160.71875, 9.921875, 0],[158.90625, 12.140625, 0],[157.5, 14.625, 0],[156.5, 17.375, 0],[155.59375, 20.125, 0],[154.78125, 22.875, 0],[154.0625, 25.625, 0],[153.4375, 28.375, 0],[152.90625, 31.125, 0],[152.46875, 33.875, 0],[152.125, 36.625, 0],[151.875, 39.375, 0],[152.0625, 41.71875, 0],[152.6875, 43.65625, 0],[153.75, 45.1875, 0],[155.25, 46.3125, 0],[157.1875, 47.03125, 0],[159.5625, 47.34375, 0],[162.375, 47.25, 0],[165.625, 46.75, 0],[168.796875, 46.25, 0],[171.890625, 45.75, 0],[174.90625, 45.25, 0],[177.84375, 44.75, 0],[180.703125, 44.25, 0],[183.484375, 43.75, 0],[186.1875, 43.25, 0],[188.8125, 42.75, 0],[191.453125, 42.34375, 0],[194.109375, 42.03125, 0],[196.78125, 41.8125, 0],[199.46875, 41.6875, 0],[202.171875, 41.65625, 0],[204.890625, 41.71875, 0],[207.625, 41.875, 0],[210.375, 42.125, 0],[213.203125, 42.4375, 0],[216.109375, 42.8125, 0],[219.09375, 43.25, 0],[222.15625, 43.75, 0],[225.296875, 44.3125, 0],[228.515625, 44.9375, 0],[231.8125, 45.625, 0],[235.1875, 46.375, 0],[238.21875, 46.609375, 0],[240.90625, 46.328125, 0],[243.25, 45.53125, 0],[245.25, 44.21875, 0],[246.90625, 42.390625, 0],[248.21875, 40.046875, 0],[249.1875, 37.1875, 0],[249.8125, 33.8125, 0],[250.171875, 30.578125, 0],[250.265625, 27.484375, 0],[250.09375, 24.53125, 0],[249.65625, 21.71875, 0],[248.953125, 19.046875, 0],[247.984375, 16.515625, 0],[246.75, 14.125, 0],[245.25, 11.875, 0],[243.484375, 9.84375, 0],[241.453125, 8.03125, 0],[239.15625, 6.4375, 0],[236.59375, 5.0625, 0],[233.765625, 3.90625, 0],[230.671875, 2.96875, 0],[227.3125, 2.25, 0],[223.6875, 1.75, 0],[220.265625, 1.3125, 0],[217.046875, 0.9375, 0],[214.03125, 0.625, 0],[211.21875, 0.375, 0],[208.859375, 0.1875, 0],[206.953125, 0.0625, 0],[205.5, 0, 0],[204.5, 0, 0],[202.71875, 0.078125, 0],[200.15625, 0.234375, 0],[197.84375, 0.390625, 0],[195.78125, 0.546875, 0],[191.625, 0.9375, 0],[188.5, 1.25, 0]];
};

philly.prototype.drawFront = function() {
    push();
    translate(this.position.x, this.position.y);
    scale(this.size * 0.35);
    strokeWeight(1);	
	stroke(8, 102, 14);
    fill(13, 161, 23);
   	
	//left arm
    push();
	translate(5, 5);
    drawPart(this.leftArm, 1);
    pop();
	//right arm
    push();
	translate(-5, 5);
    drawPart(this.rightArm, 1);
    pop();

	//legs
    push();
	scale(0.9);
	translate(10, 60);
    drawPart(this.legs, 1);
    pop();
	
    //body
    push();
    drawPart(this.body, 1);
    pop();
	push();
	stroke(0);
	fill(200, 200, 200);
	drawPart(this.shirt, 1);
	drawPart(this.leftSleeve, 1);
	drawPart(this.rightSleeve, 1);
	pop();
	
	//head
    push();
	translate(0, 10);
    drawPart(this.head, 1);
    pop();
	

	strokeWeight(2);
	line(185, 100, 200, 125);
	line(205, 100, 220, 125);
	fill(24, 209, 54);
	ellipse(210, 125, 30, 40);
	fill(200, 200, 200);
	ellipse(210, 125, 10, 15);
	fill(255, 255, 255);
	ellipse(180, 70, 20, 30);
	ellipse(220, 70, 20, 30);
	fill(100, 100, 100);
	ellipse(180, 70, 7.5, 10);
	ellipse(220, 70, 7.5, 10);
	
	fill(200, 200, 200);
	strokeWeight(1);
	stroke(0);
	//hat
	ellipse(200, 57, 90, 20);
    push();
	translate(0, 10);
    drawPart(this.hat, 1);
	pop();
	
	
    fill(252, 55, 59);
	stroke(255, 60, 60);
	strokeWeight(5);
	line(120, 150, 100, 195);
	line(105, 154, 85, 195);
	line(280, 150, 300, 195);
	line(295, 154, 315, 200);
	strokeWeight(1);
	textSize(25);
	text("Supreme", 150, 230);
	strokeWeight(0.5);
	textSize(12);
	text("M M G B", 177, 37);

	
    pop();
};

philly.prototype.drawBack = function() {
    push();
    translate(this.position.x, this.position.y);
    scale(this.size * 0.35);
    strokeWeight(1);	
	stroke(8, 102, 14);
    fill(13, 161, 23);
   	
	//left arm
    push();
	translate(5, 5);
    drawPart(this.leftArm, 1);
    pop();
	//right arm
    push();
	translate(-5, 5);
    drawPart(this.rightArm, 1);
    pop();

	//legs
    push();
	scale(0.9);
	translate(10, 60);
    drawPart(this.legs, 1);
    pop();
	
    //body
    push();
    drawPart(this.body, 1);
    pop();
	push();
	stroke(0);
	fill(200, 200, 200);
	drawPart(this.shirt, 1);
	drawPart(this.leftSleeve, 1);
	drawPart(this.rightSleeve, 1);
	pop();

	fill(24, 209, 54);
	ellipse(245, 105, 25, 35);
	fill(13, 161, 23);

	//head
    push();
	translate(0, 10);
    drawPart(this.head, 1);
    pop();

	
	
	fill(200, 200, 200);
	strokeWeight(1);
	stroke(0);
	//hat
    push();
	translate(0, 20);
    drawPart(this.hat, 1);
	pop();
	
	
    fill(252, 55, 59);
	stroke(255, 60, 60);
	strokeWeight(5);
	line(120, 150, 100, 195);
	line(105, 154, 85, 195);
	line(280, 150, 300, 195);
	line(295, 154, 315, 200);
	strokeWeight(1);
	textSize(45);
	text("49", 170, 230);

    pop();
};