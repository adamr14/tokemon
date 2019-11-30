var flareon = function(x, y, size){
    this.position = new createVector(x, y);
    this.size=size;
	this.tail = [[227.9375, 159.75, 0],[227.0625, 150.25, 0],[226.453125, 142.375, 0],[226.109375, 136.125, 0],[226.03125, 131.5, 0],[226.21875, 128.5, 0],[226.671875, 127.125, 0],[227.390625, 127.375, 0],[228.375, 129.25, 0],[229.625, 132.75, 0],[230.796875, 134.46875, 0],[231.890625, 134.40625, 0],[232.90625, 132.5625, 0],[233.84375, 128.9375, 0],[234.703125, 123.53125, 0],[235.484375, 116.34375, 0],[236.1875, 107.375, 0],[236.8125, 96.625, 0],[237.484375, 87.703125, 0],[238.203125, 80.609375, 0],[238.96875, 75.34375, 0],[239.78125, 71.90625, 0],[240.640625, 70.296875, 0],[241.546875, 70.515625, 0],[242.5, 72.5625, 0],[243.5, 76.4375, 0],[244.671875, 78.734375, 0],[246.015625, 79.453125, 0],[247.53125, 78.59375, 0],[249.21875, 76.15625, 0],[251.078125, 72.140625, 0],[253.109375, 66.546875, 0],[255.3125, 59.375, 0],[257.6875, 50.625, 0],[259.78125, 43.421875, 0],[261.59375, 37.765625, 0],[263.125, 33.65625, 0],[264.375, 31.09375, 0],[265.34375, 30.078125, 0],[266.03125, 30.609375, 0],[266.4375, 32.6875, 0],[266.5625, 36.3125, 0],[267.1875, 38.78125, 0],[268.3125, 40.09375, 0],[269.9375, 40.25, 0],[272.0625, 39.25, 0],[274.6875, 37.09375, 0],[277.8125, 33.78125, 0],[281.4375, 29.3125, 0],[285.5625, 23.6875, 0],[289.15625, 19.046875, 0],[292.21875, 15.390625, 0],[294.75, 12.71875, 0],[296.75, 11.03125, 0],[298.21875, 10.328125, 0],[299.15625, 10.609375, 0],[299.5625, 11.875, 0],[299.4375, 14.125, 0],[299.671875, 15.84375, 0],[300.265625, 17.03125, 0],[301.21875, 17.6875, 0],[302.53125, 17.8125, 0],[304.203125, 17.40625, 0],[306.234375, 16.46875, 0],[308.625, 15, 0],[311.375, 13, 0],[313.734375, 11.578125, 0],[315.703125, 10.734375, 0],[317.28125, 10.46875, 0],[318.46875, 10.78125, 0],[319.265625, 11.671875, 0],[319.671875, 13.140625, 0],[319.6875, 15.1875, 0],[319.3125, 17.8125, 0],[319.40625, 19.796875, 0],[319.96875, 21.140625, 0],[321, 21.84375, 0],[322.5, 21.90625, 0],[324.46875, 21.328125, 0],[326.90625, 20.109375, 0],[329.8125, 18.25, 0],[333.1875, 15.75, 0],[335.828125, 14.21875, 0],[337.734375, 13.65625, 0],[338.90625, 14.0625, 0],[339.34375, 15.4375, 0],[339.046875, 17.78125, 0],[338.015625, 21.09375, 0],[336.25, 25.375, 0],[333.75, 30.625, 0],[331.921875, 34.984375, 0],[330.765625, 38.453125, 0],[330.28125, 41.03125, 0],[330.46875, 42.71875, 0],[331.328125, 43.515625, 0],[332.859375, 43.421875, 0],[335.0625, 42.4375, 0],[337.9375, 40.5625, 0],[340.0625, 39.640625, 0],[341.4375, 39.671875, 0],[342.0625, 40.65625, 0],[341.9375, 42.59375, 0],[341.0625, 45.484375, 0],[339.4375, 49.328125, 0],[337.0625, 54.125, 0],[333.9375, 59.875, 0],[331.59375, 64.625, 0],[330.03125, 68.375, 0],[329.25, 71.125, 0],[329.25, 72.875, 0],[330.03125, 73.625, 0],[331.59375, 73.375, 0],[333.9375, 72.125, 0],[337.0625, 69.875, 0],[339.28125, 68.609375, 0],[340.59375, 68.328125, 0],[341, 69.03125, 0],[340.5, 70.71875, 0],[339.09375, 73.390625, 0],[336.78125, 77.046875, 0],[333.5625, 81.6875, 0],[329.4375, 87.3125, 0],[326.171875, 92.03125, 0],[323.765625, 95.84375, 0],[322.21875, 98.75, 0],[321.53125, 100.75, 0],[321.703125, 101.84375, 0],[322.734375, 102.03125, 0],[324.625, 101.3125, 0],[327.375, 99.6875, 0],[329.1875, 99.0625, 0],[330.0625, 99.4375, 0],[330, 100.8125, 0],[329, 103.1875, 0],[327.0625, 106.5625, 0],[324.1875, 110.9375, 0],[320.375, 116.3125, 0],[315.625, 122.6875, 0],[311.84375, 128.125, 0],[309.03125, 132.625, 0],[307.1875, 136.1875, 0],[306.3125, 138.8125, 0],[306.40625, 140.5, 0],[307.46875, 141.25, 0],[309.5, 141.0625, 0],[312.5, 139.9375, 0],[314.34375, 139.59375, 0],[315.03125, 140.03125, 0],[314.5625, 141.25, 0],[312.9375, 143.25, 0],[310.15625, 146.03125, 0],[306.21875, 149.59375, 0],[301.125, 153.9375, 0],[294.875, 159.0625, 0],[290.015625, 163.375, 0],[286.546875, 166.875, 0],[284.46875, 169.5625, 0],[283.78125, 171.4375, 0],[284.484375, 172.5, 0],[286.578125, 172.75, 0],[290.0625, 172.1875, 0],[294.9375, 170.8125, 0],[297.9375, 170.03125, 0],[299.0625, 169.84375, 0],[298.3125, 170.25, 0],[295.6875, 171.25, 0],[292.453125, 172.421875, 0],[288.609375, 173.765625, 0],[284.15625, 175.28125, 0],[279.09375, 176.96875, 0],[272.65625, 177.890625, 0],[264.84375, 178.046875, 0],[258.296875, 177.78125, 0],[253.015625, 177.09375, 0],[244.875, 173.6875, 0],[239.375, 170.625, 0]];
	this.body = [[180.5625, 118.625, 0],[174.4375, 121.375, 0],[168.09375, 124.140625, 0],[161.53125, 126.921875, 0],[154.75, 129.71875, 0],[147.75, 132.53125, 0],[140.53125, 135.359375, 0],[133.09375, 138.203125, 0],[125.4375, 141.0625, 0],[117.5625, 143.9375, 0],[110.1875, 147.34375, 0],[103.3125, 151.28125, 0],[96.9375, 155.75, 0],[91.0625, 160.75, 0],[85.6875, 166.28125, 0],[80.8125, 172.34375, 0],[76.4375, 178.9375, 0],[72.5625, 186.0625, 0],[69.546875, 193.0625, 0],[67.390625, 199.9375, 0],[66.09375, 206.6875, 0],[65.65625, 213.3125, 0],[66.078125, 219.8125, 0],[67.359375, 226.1875, 0],[69.5, 232.4375, 0],[72.5, 238.5625, 0],[75.765625, 244.078125, 0],[79.296875, 248.984375, 0],[83.09375, 253.28125, 0],[87.15625, 256.96875, 0],[91.484375, 260.046875, 0],[96.078125, 262.515625, 0],[100.9375, 264.375, 0],[106.0625, 265.625, 0],[111.109375, 266.578125, 0],[116.078125, 267.234375, 0],[120.96875, 267.59375, 0],[125.78125, 267.65625, 0],[130.515625, 267.421875, 0],[135.171875, 266.890625, 0],[139.75, 266.0625, 0],[144.25, 264.9375, 0],[148.625, 263.75, 0],[152.875, 262.5, 0],[157, 261.1875, 0],[161, 259.8125, 0],[164.875, 258.375, 0],[168.625, 256.875, 0],[172.25, 255.3125, 0],[175.75, 253.6875, 0],[179.265625, 251.8125, 0],[182.796875, 249.6875, 0],[186.34375, 247.3125, 0],[189.90625, 244.6875, 0],[193.484375, 241.8125, 0],[197.078125, 238.6875, 0],[200.6875, 235.3125, 0],[204.3125, 231.6875, 0],[207.6875, 227.90625, 0],[210.8125, 223.96875, 0],[213.6875, 219.875, 0],[216.3125, 215.625, 0],[218.6875, 211.21875, 0],[220.8125, 206.65625, 0],[222.6875, 201.9375, 0],[224.3125, 197.0625, 0],[226.125, 192.796875, 0],[228.125, 189.140625, 0],[230.3125, 186.09375, 0],[232.6875, 183.65625, 0],[235.25, 181.828125, 0],[238, 180.609375, 0],[240.9375, 180, 0],[244.0625, 180, 0],[247.09375, 180.21875, 0],[250.03125, 180.65625, 0],[252.875, 181.3125, 0],[255.625, 182.1875, 0],[258.28125, 183.28125, 0],[260.84375, 184.59375, 0],[263.3125, 186.125, 0],[265.6875, 187.875, 0],[268.078125, 189.28125, 0],[270.484375, 190.34375, 0],[272.90625, 191.0625, 0],[275.34375, 191.4375, 0],[277.796875, 191.46875, 0],[280.265625, 191.15625, 0],[282.75, 190.5, 0],[285.25, 189.5, 0],[287.8125, 188.234375, 0],[290.4375, 186.703125, 0],[293.125, 184.90625, 0],[295.875, 182.84375, 0],[298.6875, 180.515625, 0],[301.5625, 177.921875, 0],[304.5, 175.0625, 0],[307.5, 171.9375, 0],[310.03125, 168.765625, 0],[312.09375, 165.546875, 0],[313.6875, 162.28125, 0],[314.8125, 158.96875, 0],[315.46875, 155.609375, 0],[315.65625, 152.203125, 0],[315.375, 148.75, 0],[314.625, 145.25, 0],[313.5, 141.6875, 0],[312, 138.0625, 0],[310.125, 134.375, 0],[307.875, 130.625, 0],[305.25, 126.8125, 0],[302.25, 122.9375, 0],[298.875, 119, 0],[295.125, 115, 0],[291.328125, 111.328125, 0],[287.484375, 107.984375, 0],[283.59375, 104.96875, 0],[279.65625, 102.28125, 0],[275.671875, 99.921875, 0],[271.640625, 97.890625, 0],[267.5625, 96.1875, 0],[263.4375, 94.8125, 0],[259.09375, 93.90625, 0],[254.53125, 93.46875, 0],[249.75, 93.5, 0],[244.75, 94, 0],[240.265625, 94.671875, 0],[236.296875, 95.515625, 0],[232.84375, 96.53125, 0],[229.90625, 97.71875, 0],[225.46875, 99.546875, 0],[219.53125, 102.015625, 0],[214.328125, 104.1875, 0],[209.859375, 106.0625, 0],[201.625, 109.5625, 0],[195.625, 112.125, 0]];
	this.mane = [[91.875, 231.3125, 0],[98.125, 233.6875, 0],[104.359375, 235.578125, 0],[110.578125, 236.984375, 0],[116.78125, 237.90625, 0],[122.96875, 238.34375, 0],[129.140625, 238.296875, 0],[135.296875, 237.765625, 0],[141.4375, 236.75, 0],[147.5625, 235.25, 0],[153.21875, 233.484375, 0],[158.40625, 231.453125, 0],[163.125, 229.15625, 0],[167.375, 226.59375, 0],[171.15625, 223.765625, 0],[174.46875, 220.671875, 0],[177.3125, 217.3125, 0],[179.6875, 213.6875, 0],[181.578125, 210.578125, 0],[182.984375, 207.984375, 0],[183.90625, 205.90625, 0],[184.34375, 204.34375, 0],[184.296875, 203.296875, 0],[183.765625, 202.765625, 0],[182.75, 202.75, 0],[181.25, 203.25, 0],[180.578125, 203.109375, 0],[180.734375, 202.328125, 0],[181.71875, 200.90625, 0],[183.53125, 198.84375, 0],[186.171875, 196.140625, 0],[189.640625, 192.796875, 0],[193.9375, 188.8125, 0],[199.0625, 184.1875, 0],[203.375, 180.140625, 0],[206.875, 176.671875, 0],[209.5625, 173.78125, 0],[211.4375, 171.46875, 0],[212.5, 169.734375, 0],[212.75, 168.578125, 0],[212.1875, 168, 0],[210.8125, 168, 0],[209.875, 167.1875, 0],[209.375, 165.5625, 0],[209.3125, 163.125, 0],[209.6875, 159.875, 0],[210.5, 155.8125, 0],[211.75, 150.9375, 0],[213.4375, 145.25, 0],[215.5625, 138.75, 0],[217.1875, 133.109375, 0],[218.3125, 128.328125, 0],[218.9375, 124.40625, 0],[219.0625, 121.34375, 0],[218.6875, 119.140625, 0],[217.8125, 117.796875, 0],[216.4375, 117.3125, 0],[214.5625, 117.6875, 0],[212.796875, 117.328125, 0],[211.140625, 116.234375, 0],[209.59375, 114.40625, 0],[208.15625, 111.84375, 0],[206.828125, 108.546875, 0],[205.609375, 104.515625, 0],[204.5, 99.75, 0],[203.5, 94.25, 0],[202.078125, 89.15625, 0],[200.234375, 84.46875, 0],[197.96875, 80.1875, 0],[195.28125, 76.3125, 0],[192.171875, 72.84375, 0],[188.640625, 69.78125, 0],[184.6875, 67.125, 0],[180.3125, 64.875, 0],[176.5625, 63.09375, 0],[173.4375, 61.78125, 0],[170.9375, 60.9375, 0],[169.0625, 60.5625, 0],[167.8125, 60.65625, 0],[167.1875, 61.21875, 0],[167.1875, 62.25, 0],[167.8125, 63.75, 0],[167.46875, 64.953125, 0],[166.15625, 65.859375, 0],[163.875, 66.46875, 0],[160.625, 66.78125, 0],[156.40625, 66.796875, 0],[151.21875, 66.515625, 0],[145.0625, 65.9375, 0],[137.9375, 65.0625, 0],[131.84375, 64.390625, 0],[126.78125, 63.921875, 0],[122.75, 63.65625, 0],[119.75, 63.59375, 0],[117.78125, 63.734375, 0],[116.84375, 64.078125, 0],[116.9375, 64.625, 0],[118.0625, 65.375, 0],[118.171875, 66.296875, 0],[117.265625, 67.390625, 0],[115.34375, 68.65625, 0],[112.40625, 70.09375, 0],[108.453125, 71.703125, 0],[103.484375, 73.484375, 0],[97.5, 75.4375, 0],[90.5, 77.5625, 0],[84.578125, 79.46875, 0],[79.734375, 81.15625, 0],[75.96875, 82.625, 0],[73.28125, 83.875, 0],[71.671875, 84.90625, 0],[71.140625, 85.71875, 0],[71.6875, 86.3125, 0],[73.3125, 86.6875, 0],[74.03125, 87.59375, 0],[73.84375, 89.03125, 0],[72.75, 91, 0],[70.75, 93.5, 0],[67.84375, 96.53125, 0],[64.03125, 100.09375, 0],[59.3125, 104.1875, 0],[53.6875, 108.8125, 0],[48.796875, 113.390625, 0],[44.640625, 117.921875, 0],[41.21875, 122.40625, 0],[38.53125, 126.84375, 0],[36.578125, 131.234375, 0],[35.359375, 135.578125, 0],[34.875, 139.875, 0],[35.125, 144.125, 0],[35.484375, 147.53125, 0],[35.953125, 150.09375, 0],[36.53125, 151.8125, 0],[37.21875, 152.6875, 0],[38.015625, 152.71875, 0],[38.921875, 151.90625, 0],[39.9375, 150.25, 0],[41.0625, 147.75, 0],[42, 146.421875, 0],[42.75, 146.265625, 0],[43.3125, 147.28125, 0],[43.6875, 149.46875, 0],[43.875, 152.828125, 0],[43.875, 157.359375, 0],[43.6875, 163.0625, 0],[43.3125, 169.9375, 0],[43.125, 175.5625, 0],[43.125, 179.9375, 0],[43.3125, 183.0625, 0],[43.6875, 184.9375, 0],[44.25, 185.5625, 0],[45, 184.9375, 0],[45.9375, 183.0625, 0],[47.0625, 179.9375, 0],[48.09375, 177.796875, 0],[49.03125, 176.640625, 0],[49.875, 176.46875, 0],[50.625, 177.28125, 0],[51.28125, 179.078125, 0],[51.84375, 181.859375, 0],[52.3125, 185.625, 0],[52.6875, 190.375, 0],[53.265625, 194.78125, 0],[54.046875, 198.84375, 0],[55.03125, 202.5625, 0],[56.21875, 205.9375, 0],[57.359375, 208.71875, 0],[58.453125, 210.90625, 0],[59.5, 212.5, 0],[60.5, 213.5, 0],[62.53125, 215.046875, 0],[65.59375, 217.140625, 0],[68.40625, 218.984375, 0],[70.96875, 220.578125, 0],[76.375, 223.5625, 0],[80.5, 225.75, 0]];
	this.frohawk = [[69.0625, 126, 0],[69.9375, 120, 0],[70.8125, 114.96875, 0],[71.6875, 110.90625, 0],[72.5625, 107.8125, 0],[73.4375, 105.6875, 0],[74.3125, 104.53125, 0],[75.1875, 104.34375, 0],[76.0625, 105.125, 0],[76.9375, 106.875, 0],[77.9375, 107.734375, 0],[79.0625, 107.703125, 0],[80.3125, 106.78125, 0],[81.6875, 104.96875, 0],[83.1875, 102.265625, 0],[84.8125, 98.671875, 0],[86.5625, 94.1875, 0],[88.4375, 88.8125, 0],[90.125, 84.359375, 0],[91.625, 80.828125, 0],[92.9375, 78.21875, 0],[94.0625, 76.53125, 0],[95, 75.765625, 0],[95.75, 75.921875, 0],[96.3125, 77, 0],[96.6875, 79, 0],[97.390625, 80.28125, 0],[98.421875, 80.84375, 0],[99.78125, 80.6875, 0],[101.46875, 79.8125, 0],[103.484375, 78.21875, 0],[105.828125, 75.90625, 0],[108.5, 72.875, 0],[111.5, 69.125, 0],[114.09375, 66.21875, 0],[116.28125, 64.15625, 0],[118.0625, 62.9375, 0],[119.4375, 62.5625, 0],[120.40625, 63.03125, 0],[120.96875, 64.34375, 0],[121.125, 66.5, 0],[120.875, 69.5, 0],[121.109375, 71.703125, 0],[121.828125, 73.109375, 0],[123.03125, 73.71875, 0],[124.71875, 73.53125, 0],[126.890625, 72.546875, 0],[129.546875, 70.765625, 0],[132.6875, 68.1875, 0],[136.3125, 64.8125, 0],[139.390625, 62.125, 0],[141.921875, 60.125, 0],[143.90625, 58.8125, 0],[145.34375, 58.1875, 0],[146.234375, 58.25, 0],[146.578125, 59, 0],[146.375, 60.4375, 0],[145.625, 62.5625, 0],[145.234375, 64.359375, 0],[145.203125, 65.828125, 0],[145.53125, 66.96875, 0],[146.21875, 67.78125, 0],[147.265625, 68.265625, 0],[148.671875, 68.421875, 0],[150.4375, 68.25, 0],[152.5625, 67.75, 0],[154.375, 67.515625, 0],[155.875, 67.546875, 0],[157.0625, 67.84375, 0],[157.9375, 68.40625, 0],[158.5, 69.234375, 0],[158.75, 70.328125, 0],[158.6875, 71.6875, 0],[158.3125, 73.3125, 0],[157.859375, 75.0625, 0],[157.328125, 76.9375, 0],[156.71875, 78.9375, 0],[156.03125, 81.0625, 0],[155.265625, 83.3125, 0],[154.421875, 85.6875, 0],[153.5, 88.1875, 0],[152.5, 90.8125, 0],[151.28125, 93.375, 0],[149.84375, 95.875, 0],[148.1875, 98.3125, 0],[146.3125, 100.6875, 0],[144.21875, 103, 0],[141.90625, 105.25, 0],[139.375, 107.4375, 0],[136.625, 109.5625, 0],[133.78125, 111.765625, 0],[130.84375, 114.046875, 0],[127.8125, 116.40625, 0],[124.6875, 118.84375, 0],[121.46875, 121.359375, 0],[118.15625, 123.953125, 0],[114.75, 126.625, 0],[111.25, 129.375, 0],[107.671875, 131.90625, 0],[104.015625, 134.21875, 0],[100.28125, 136.3125, 0],[96.46875, 138.1875, 0],[93.09375, 139.71875, 0],[90.15625, 140.90625, 0],[87.65625, 141.75, 0],[85.59375, 142.25, 0],[83.125, 142.125, 0],[80.25, 141.375, 0],[77.890625, 140.5, 0],[76.046875, 139.5, 0],[73.5, 136.5, 0],[71.875, 134, 0]];
	this.ear = [[127.1875, 163.4375, 0],[127.8125, 167.5625, 0],[128.5625, 171.296875, 0],[129.4375, 174.640625, 0],[130.4375, 177.59375, 0],[131.5625, 180.15625, 0],[132.8125, 182.328125, 0],[134.1875, 184.109375, 0],[135.6875, 185.5, 0],[137.3125, 186.5, 0],[139.328125, 187.203125, 0],[141.734375, 187.609375, 0],[144.53125, 187.71875, 0],[147.71875, 187.53125, 0],[151.296875, 187.046875, 0],[155.265625, 186.265625, 0],[159.625, 185.1875, 0],[164.375, 183.8125, 0],[168.953125, 181.921875, 0],[173.359375, 179.515625, 0],[177.59375, 176.59375, 0],[181.65625, 173.15625, 0],[185.546875, 169.203125, 0],[189.265625, 164.734375, 0],[192.8125, 159.75, 0],[196.1875, 154.25, 0],[199.3125, 148.546875, 0],[202.1875, 142.640625, 0],[204.8125, 136.53125, 0],[207.1875, 130.21875, 0],[209.3125, 123.703125, 0],[211.1875, 116.984375, 0],[212.8125, 110.0625, 0],[214.1875, 102.9375, 0],[215.390625, 96.390625, 0],[216.421875, 90.421875, 0],[217.28125, 85.03125, 0],[217.96875, 80.21875, 0],[218.484375, 75.984375, 0],[218.828125, 72.328125, 0],[219, 69.25, 0],[219, 66.75, 0],[218.703125, 64.671875, 0],[218.109375, 63.015625, 0],[217.21875, 61.78125, 0],[216.03125, 60.96875, 0],[214.546875, 60.578125, 0],[212.765625, 60.609375, 0],[210.6875, 61.0625, 0],[208.3125, 61.9375, 0],[205.546875, 63.296875, 0],[202.390625, 65.140625, 0],[198.84375, 67.46875, 0],[194.90625, 70.28125, 0],[190.578125, 73.578125, 0],[185.859375, 77.359375, 0],[180.75, 81.625, 0],[175.25, 86.375, 0],[169.953125, 91.25, 0],[164.859375, 96.25, 0],[159.96875, 101.375, 0],[155.28125, 106.625, 0],[151.28125, 111.28125, 0],[147.96875, 115.34375, 0],[145.34375, 118.8125, 0],[143.40625, 121.6875, 0],[141.0625, 125.796875, 0],[138.3125, 131.140625, 0],[136.046875, 135.765625, 0],[134.265625, 139.671875, 0],[131.75, 146.5625, 0],[130.125, 151.5, 0]];
	this.feet = [[199.25, 216, 0],[194.75, 212, 0],[190.015625, 208.265625, 0],[185.046875, 204.796875, 0],[179.84375, 201.59375, 0],[174.40625, 198.65625, 0],[168.734375, 195.984375, 0],[162.828125, 193.578125, 0],[156.6875, 191.4375, 0],[150.3125, 189.5625, 0],[144.265625, 188.40625, 0],[138.546875, 187.96875, 0],[133.15625, 188.25, 0],[128.09375, 189.25, 0],[123.359375, 190.96875, 0],[118.953125, 193.40625, 0],[114.875, 196.5625, 0],[111.125, 200.4375, 0],[107.875, 204.34375, 0],[105.125, 208.28125, 0],[102.875, 212.25, 0],[101.125, 216.25, 0],[99.875, 220.28125, 0],[99.125, 224.34375, 0],[98.875, 228.4375, 0],[99.125, 232.5625, 0],[99.921875, 236.203125, 0],[101.265625, 239.359375, 0],[103.15625, 242.03125, 0],[105.59375, 244.21875, 0],[108.578125, 245.921875, 0],[112.109375, 247.140625, 0],[116.1875, 247.875, 0],[120.8125, 248.125, 0],[125.625, 248.296875, 0],[130.625, 248.390625, 0],[135.8125, 248.40625, 0],[141.1875, 248.34375, 0],[146.75, 248.203125, 0],[152.5, 247.984375, 0],[158.4375, 247.6875, 0],[164.5625, 247.3125, 0],[170.484375, 246.859375, 0],[176.203125, 246.328125, 0],[181.71875, 245.71875, 0],[187.03125, 245.03125, 0],[192.140625, 244.265625, 0],[197.046875, 243.421875, 0],[201.75, 242.5, 0],[206.25, 241.5, 0],[210.078125, 240.5, 0],[213.234375, 239.5, 0],[215.71875, 238.5, 0],[217.53125, 237.5, 0],[218.78125, 236.625, 0],[219.46875, 235.875, 0],[219.59375, 235.25, 0],[219.15625, 234.75, 0],[218.046875, 233.625, 0],[216.265625, 231.875, 0],[214.59375, 230.25, 0],[213.03125, 228.75, 0],[209.5625, 225.5, 0],[206.875, 223, 0]];
	this.feet_back = [[123, 227.5625, 0],[125, 221.4375, 0],[127.390625, 215.765625, 0],[130.171875, 210.546875, 0],[133.34375, 205.78125, 0],[136.90625, 201.46875, 0],[140.859375, 197.609375, 0],[145.203125, 194.203125, 0],[149.9375, 191.25, 0],[155.0625, 188.75, 0],[160.125, 186.796875, 0],[165.125, 185.390625, 0],[170.0625, 184.53125, 0],[174.9375, 184.21875, 0],[179.75, 184.453125, 0],[184.5, 185.234375, 0],[189.1875, 186.5625, 0],[193.8125, 188.4375, 0],[198, 190.46875, 0],[201.75, 192.65625, 0],[205.0625, 195, 0],[207.9375, 197.5, 0],[210.375, 200.15625, 0],[212.375, 202.96875, 0],[213.9375, 205.9375, 0],[215.0625, 209.0625, 0],[215.703125, 212.140625, 0],[215.859375, 215.171875, 0],[215.53125, 218.15625, 0],[214.71875, 221.09375, 0],[213.421875, 223.984375, 0],[211.640625, 226.828125, 0],[209.375, 229.625, 0],[206.625, 232.375, 0],[203.859375, 235.078125, 0],[201.078125, 237.734375, 0],[198.28125, 240.34375, 0],[195.46875, 242.90625, 0],[192.640625, 245.421875, 0],[189.796875, 247.890625, 0],[186.9375, 250.3125, 0],[184.0625, 252.6875, 0],[181, 255.0625, 0],[177.75, 257.4375, 0],[174.3125, 259.8125, 0],[170.6875, 262.1875, 0],[166.875, 264.5625, 0],[162.875, 266.9375, 0],[158.6875, 269.3125, 0],[154.3125, 271.6875, 0],[149.984375, 273.765625, 0],[145.703125, 275.546875, 0],[141.46875, 277.03125, 0],[137.28125, 278.21875, 0],[133.140625, 279.109375, 0],[129.046875, 279.703125, 0],[125, 280, 0],[121, 280, 0],[117.640625, 279.515625, 0],[114.921875, 278.546875, 0],[112.84375, 277.09375, 0],[111.40625, 275.15625, 0],[110.46875, 273.21875, 0],[110.03125, 271.28125, 0],[110.09375, 269.34375, 0],[110.65625, 267.40625, 0],[111.609375, 264.21875, 0],[112.953125, 259.78125, 0],[114.15625, 255.828125, 0],[115.21875, 252.359375, 0],[117.3125, 245.625, 0],[118.875, 240.625, 0]];
};

flareon.prototype.drawFront = function() {
    push();
    translate(this.position.x, this.position.y);
    scale(this.size * 0.35);
    strokeWeight(1);	
	stroke(0);
   	
	fill(201, 122, 18);
	rect(100, 200, 20, 110, 5);
	rect(150, 200, 20, 120, 5);	
	rect(240, 200, 25, 80, 5);	
	push();
	scale(0.35);
	translate(120, 645);
	drawPart(this.feet, 1);
	pop();
	push();
	scale(0.35);
	translate(260, 675);
	drawPart(this.feet, 1);
	pop();
	push();
	scale(0.35);
	translate(540, 560);
	drawPart(this.feet, 1);
	pop();
    fill(217, 202, 84);

	//body
	push();
	fill(201, 122, 18);
	scale(0.7);
	rotate(Math.PI / 20);
	translate(120, 80);
	drawPart(this.body, 1);
	pop();
	 
	fill(217, 202, 84);
	//tail
	push();
	drawPart(this.tail, 1);
	pop();
	//mane
	push();
	scale(0.7);
	translate(60, 145);
	drawPart(this.mane, 1);
	pop();
	
	//head
    fill(201, 122, 18);
	ellipse(110, 170, 80, 75);
	
	//left ear
	push();
	scale(0.7);
	translate(-70, 180);
	rotate(-Math.PI / 4);
	drawPart(this.ear, 1);
	fill(0);
	push();
	scale(0.6);
	translate(110, 100);
	drawPart(this.ear, 1);	
	pop();
	pop();
	
	//frohawk
    fill(217, 202, 84);
	push();
	scale(0.9);
	translate(12, -23);
	scale(0.7);
	translate(60, 145);
	drawPart(this.frohawk, 1);
	pop();
	
	fill(201, 122, 18);
	//right eat
	push();
	translate(85, 0);
	rotate(Math.PI / 8);
	scale(0.7);
	drawPart(this.ear, 1);
	fill(0);
	push();
	scale(0.6);
	translate(110, 100);
	drawPart(this.ear, 1);	
	pop();
	pop();
	
	fill(0);
	push();
	rotate(Math.PI / 8);
	translate(50, -45);
	ellipse(90, 160, 20, 15);
	fill(255, 255, 255);
	ellipse(90, 160, 8, 6);
	pop();
	
	push();
	rotate(Math.PI / -8);
	translate(-45, 40);
	ellipse(90, 160, 20, 15);
	fill(255, 255, 255);
	ellipse(90, 160, 8, 6);
	pop();
	
	ellipse(97, 195, 6, 4);
	
    pop();
};

flareon.prototype.drawBack = function() {
    push();
    translate(this.position.x, this.position.y);
    scale(this.size * 0.35);
    strokeWeight(1);	
	stroke(0);
   	
	//head
    fill(201, 122, 18);
	ellipse(210, 170, 80, 75);
	
	//left ear
	push();
	scale(0.7);
	translate(40, 190);
	rotate(-Math.PI / 4);
	drawPart(this.ear, 1);
	pop();
	
	//frohawk
    fill(217, 202, 84);
	push();
	scale(0.7);
	translate(200, 105);
	drawPart(this.frohawk, 1);
	pop();
	fill(201, 122, 18);
	
	//right eat
	push();
	translate(155, 20);
	rotate(Math.PI / 20);
	scale(0.7);
	drawPart(this.ear, 1);
	pop();
	
	//mane
    fill(217, 202, 84);
	push();
	scale(0.7);
	translate(145, 185);
	drawPart(this.mane, 1);
	pop();
	
	fill(201, 122, 18);
	//feet
	push();
	scale(0.35);
	translate(320, 740);
	drawPart(this.feet_back, 1);
	pop();
	push();
	scale(0.35);
	translate(440, 725);
	drawPart(this.feet_back, 1);
	pop();
	push();
	scale(0.3);
	translate(590, 760);
	drawPart(this.feet_back, 1);
	pop();
	quad(210, 230, 230, 230, 230, 310, 210, 310);
	quad(140, 300, 180, 300, 170, 355, 150, 355);
	quad(180, 280, 220, 280, 210, 350, 190, 350);

	//body
	push();
	rotate(-Math.PI / 8);
	translate(-110, 55);
	ellipse(180, 250, 120, 90);
	pop();
	
	fill(217, 202, 84);
	//tail
	push();
	rotate(-Math.PI / 6);
	translate(-270, 180);
	drawPart(this.tail, 1);
	pop();
	
    pop();
};