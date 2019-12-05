var mewtoo = function(x, y, size){
    this.position = new createVector(x, y);
    this.size=size;
	this.body = [[144.75, 188, 0],[147.25, 182, 0],[149.515625, 176.1875, 0],[151.546875, 170.5625, 0],[153.34375, 165.125, 0],[154.90625, 159.875, 0],[156.234375, 154.8125, 0],[157.328125, 149.9375, 0],[158.1875, 145.25, 0],[158.8125, 140.75, 0],[159.0625, 136.046875, 0],[158.9375, 131.140625, 0],[158.4375, 126.03125, 0],[157.5625, 120.71875, 0],[156.3125, 115.203125, 0],[154.6875, 109.484375, 0],[152.6875, 103.5625, 0],[150.3125, 97.4375, 0],[148.109375, 91.734375, 0],[146.078125, 86.453125, 0],[144.21875, 81.59375, 0],[142.53125, 77.15625, 0],[141.015625, 73.140625, 0],[139.671875, 69.546875, 0],[138.5, 66.375, 0],[137.5, 63.625, 0],[137.234375, 61.21875, 0],[137.703125, 59.15625, 0],[138.90625, 57.4375, 0],[140.84375, 56.0625, 0],[143.515625, 55.03125, 0],[146.921875, 54.34375, 0],[151.0625, 54, 0],[155.9375, 54, 0],[161.03125, 54.015625, 0],[166.34375, 54.046875, 0],[171.875, 54.09375, 0],[177.625, 54.15625, 0],[183.59375, 54.234375, 0],[189.78125, 54.328125, 0],[196.1875, 54.4375, 0],[202.8125, 54.5625, 0],[209.15625, 54.65625, 0],[215.21875, 54.71875, 0],[221, 54.75, 0],[226.5, 54.75, 0],[231.71875, 54.71875, 0],[236.65625, 54.65625, 0],[241.3125, 54.5625, 0],[245.6875, 54.4375, 0],[249.359375, 54.9375, 0],[252.328125, 56.0625, 0],[254.59375, 57.8125, 0],[256.15625, 60.1875, 0],[257.015625, 63.1875, 0],[257.171875, 66.8125, 0],[256.625, 71.0625, 0],[255.375, 75.9375, 0],[254.1875, 81.03125, 0],[253.0625, 86.34375, 0],[252, 91.875, 0],[251, 97.625, 0],[250.0625, 103.59375, 0],[249.1875, 109.78125, 0],[248.375, 116.1875, 0],[247.625, 122.8125, 0],[246.890625, 129.15625, 0],[246.171875, 135.21875, 0],[245.46875, 141, 0],[244.78125, 146.5, 0],[244.109375, 151.71875, 0],[243.453125, 156.65625, 0],[242.8125, 161.3125, 0],[242.1875, 165.6875, 0],[241.640625, 169.90625, 0],[241.171875, 173.96875, 0],[240.78125, 177.875, 0],[240.46875, 181.625, 0],[240.234375, 185.21875, 0],[240.078125, 188.65625, 0],[240, 191.9375, 0],[240, 195.0625, 0],[239.125, 197.984375, 0],[237.375, 200.703125, 0],[234.75, 203.21875, 0],[231.25, 205.53125, 0],[226.875, 207.640625, 0],[221.625, 209.546875, 0],[215.5, 211.25, 0],[208.5, 212.75, 0],[201.96875, 214.0625, 0],[195.90625, 215.1875, 0],[190.3125, 216.125, 0],[185.1875, 216.875, 0],[180.53125, 217.4375, 0],[176.34375, 217.8125, 0],[172.625, 218, 0],[169.375, 218, 0],[166.1875, 217.859375, 0],[163.0625, 217.578125, 0],[160, 217.15625, 0],[157, 216.59375, 0],[154.40625, 216.03125, 0],[152.21875, 215.46875, 0],[150.4375, 214.90625, 0],[149.0625, 214.34375, 0],[147.65625, 212.890625, 0],[146.21875, 210.546875, 0],[145.125, 208.34375, 0],[144.375, 206.28125, 0],[143.875, 201.6875, 0],[143.75, 198.125, 0]];
	this.rightArm = [[130.5625, 70.625, 0],[128.4375, 75.375, 0],[126.1875, 80.28125, 0],[123.8125, 85.34375, 0],[121.3125, 90.5625, 0],[118.6875, 95.9375, 0],[115.9375, 101.46875, 0],[113.0625, 107.15625, 0],[110.0625, 113, 0],[106.9375, 119, 0],[104.34375, 124.453125, 0],[102.28125, 129.359375, 0],[100.75, 133.71875, 0],[99.75, 137.53125, 0],[99.28125, 140.796875, 0],[99.34375, 143.515625, 0],[99.9375, 145.6875, 0],[101.0625, 147.3125, 0],[102.328125, 148.375, 0],[103.734375, 148.875, 0],[105.28125, 148.8125, 0],[106.96875, 148.1875, 0],[108.796875, 147, 0],[110.765625, 145.25, 0],[112.875, 142.9375, 0],[115.125, 140.0625, 0],[117.328125, 137.1875, 0],[119.484375, 134.3125, 0],[121.59375, 131.4375, 0],[123.65625, 128.5625, 0],[125.671875, 125.6875, 0],[127.640625, 122.8125, 0],[129.5625, 119.9375, 0],[131.4375, 117.0625, 0],[133.359375, 114.21875, 0],[135.328125, 111.40625, 0],[137.34375, 108.625, 0],[139.40625, 105.875, 0],[141.515625, 103.15625, 0],[143.671875, 100.46875, 0],[145.875, 97.8125, 0],[148.125, 95.1875, 0],[149.984375, 92.609375, 0],[151.453125, 90.078125, 0],[152.53125, 87.59375, 0],[153.21875, 85.15625, 0],[153.515625, 82.765625, 0],[153.421875, 80.421875, 0],[152.9375, 78.125, 0],[152.0625, 75.875, 0],[151.125, 73.6875, 0],[150.125, 71.5625, 0],[149.0625, 69.5, 0],[147.9375, 67.5, 0],[146.921875, 65.78125, 0],[146.015625, 64.34375, 0],[145.21875, 63.1875, 0],[144.53125, 62.3125, 0],[143.40625, 61.8125, 0],[141.84375, 61.6875, 0],[140.453125, 61.78125, 0],[139.234375, 62.09375, 0],[136.875, 63.75, 0],[135.125, 65.25, 0]];
	this.leftArm = [[252.875, 164.75, 0],[255.125, 167.25, 0],[257.59375, 169.921875, 0],[260.28125, 172.765625, 0],[263.1875, 175.78125, 0],[266.3125, 178.96875, 0],[269.65625, 182.328125, 0],[273.21875, 185.859375, 0],[277, 189.5625, 0],[281, 193.4375, 0],[284.34375, 196.953125, 0],[287.03125, 200.109375, 0],[289.0625, 202.90625, 0],[290.4375, 205.34375, 0],[291.15625, 207.421875, 0],[291.21875, 209.140625, 0],[290.625, 210.5, 0],[289.375, 211.5, 0],[288.015625, 212.1875, 0],[286.546875, 212.5625, 0],[284.96875, 212.625, 0],[283.28125, 212.375, 0],[281.484375, 211.8125, 0],[279.578125, 210.9375, 0],[277.5625, 209.75, 0],[275.4375, 208.25, 0],[273.34375, 206.78125, 0],[271.28125, 205.34375, 0],[269.25, 203.9375, 0],[267.25, 202.5625, 0],[265.28125, 201.21875, 0],[263.34375, 199.90625, 0],[261.4375, 198.625, 0],[259.5625, 197.375, 0],[257.78125, 196.171875, 0],[256.09375, 195.015625, 0],[254.5, 193.90625, 0],[253, 192.84375, 0],[251.59375, 191.828125, 0],[250.28125, 190.859375, 0],[249.0625, 189.9375, 0],[247.9375, 189.0625, 0],[246.78125, 188.21875, 0],[245.59375, 187.40625, 0],[244.375, 186.625, 0],[243.125, 185.875, 0],[241.84375, 185.15625, 0],[240.53125, 184.46875, 0],[239.1875, 183.8125, 0],[237.8125, 183.1875, 0],[236.515625, 182.3125, 0],[235.296875, 181.1875, 0],[234.15625, 179.8125, 0],[233.09375, 178.1875, 0],[232.109375, 176.3125, 0],[231.203125, 174.1875, 0],[230.375, 171.8125, 0],[229.625, 169.1875, 0],[229, 166.4375, 0],[228.5, 163.5625, 0],[228.125, 160.5625, 0],[227.875, 157.4375, 0],[227.75, 154.1875, 0],[227.75, 150.8125, 0],[227.875, 147.3125, 0],[228.125, 143.6875, 0],[228.59375, 140.90625, 0],[229.28125, 138.96875, 0],[230.1875, 137.875, 0],[231.3125, 137.625, 0],[232.40625, 137.828125, 0],[233.46875, 138.484375, 0],[234.5, 139.59375, 0],[235.5, 141.15625, 0],[237.03125, 143.421875, 0],[239.09375, 146.390625, 0],[240.90625, 148.96875, 0],[242.46875, 151.15625, 0],[245.375, 155.0625, 0],[247.5, 157.875, 0]];
	this.chest = [[161.75, 57.25, 0],[164.25, 56.75, 0],[166.796875, 56.3125, 0],[169.390625, 55.9375, 0],[172.03125, 55.625, 0],[174.71875, 55.375, 0],[177.453125, 55.1875, 0],[180.234375, 55.0625, 0],[183.0625, 55, 0],[185.9375, 55, 0],[188.78125, 55.015625, 0],[191.59375, 55.046875, 0],[194.375, 55.09375, 0],[197.125, 55.15625, 0],[199.84375, 55.234375, 0],[202.53125, 55.328125, 0],[205.1875, 55.4375, 0],[207.8125, 55.5625, 0],[210.40625, 55.703125, 0],[212.96875, 55.859375, 0],[215.5, 56.03125, 0],[218, 56.21875, 0],[220.46875, 56.421875, 0],[222.90625, 56.640625, 0],[225.3125, 56.875, 0],[227.6875, 57.125, 0],[229.875, 57.59375, 0],[231.875, 58.28125, 0],[233.6875, 59.1875, 0],[235.3125, 60.3125, 0],[236.75, 61.65625, 0],[238, 63.21875, 0],[239.0625, 65, 0],[239.9375, 67, 0],[240.671875, 69.046875, 0],[241.265625, 71.140625, 0],[241.71875, 73.28125, 0],[242.03125, 75.46875, 0],[242.203125, 77.703125, 0],[242.234375, 79.984375, 0],[242.125, 82.3125, 0],[241.875, 84.6875, 0],[241.53125, 87.09375, 0],[241.09375, 89.53125, 0],[240.5625, 92, 0],[239.9375, 94.5, 0],[239.21875, 97.03125, 0],[238.40625, 99.59375, 0],[237.5, 102.1875, 0],[236.5, 104.8125, 0],[235.546875, 107.40625, 0],[234.640625, 109.96875, 0],[233.78125, 112.5, 0],[232.96875, 115, 0],[232.203125, 117.46875, 0],[231.484375, 119.90625, 0],[230.8125, 122.3125, 0],[230.1875, 124.6875, 0],[229.296875, 126.8125, 0],[228.140625, 128.6875, 0],[226.71875, 130.3125, 0],[225.03125, 131.6875, 0],[223.078125, 132.8125, 0],[220.859375, 133.6875, 0],[218.375, 134.3125, 0],[215.625, 134.6875, 0],[212.890625, 135, 0],[210.171875, 135.25, 0],[207.46875, 135.4375, 0],[204.78125, 135.5625, 0],[202.109375, 135.625, 0],[199.453125, 135.625, 0],[196.8125, 135.5625, 0],[194.1875, 135.4375, 0],[191.625, 135.203125, 0],[189.125, 134.859375, 0],[186.6875, 134.40625, 0],[184.3125, 133.84375, 0],[182, 133.171875, 0],[179.75, 132.390625, 0],[177.5625, 131.5, 0],[175.4375, 130.5, 0],[173.421875, 129.4375, 0],[171.515625, 128.3125, 0],[169.71875, 127.125, 0],[168.03125, 125.875, 0],[166.453125, 124.5625, 0],[164.984375, 123.1875, 0],[163.625, 121.75, 0],[162.375, 120.25, 0],[161.203125, 118.625, 0],[160.109375, 116.875, 0],[159.09375, 115, 0],[158.15625, 113, 0],[157.296875, 110.875, 0],[156.515625, 108.625, 0],[155.8125, 106.25, 0],[155.1875, 103.75, 0],[154.59375, 101.34375, 0],[154.03125, 99.03125, 0],[153.5, 96.8125, 0],[153, 94.6875, 0],[152.53125, 92.65625, 0],[152.09375, 90.71875, 0],[151.6875, 88.875, 0],[151.3125, 87.125, 0],[151.03125, 85.25, 0],[150.84375, 83.25, 0],[150.75, 81.125, 0],[150.75, 78.875, 0],[150.796875, 76.84375, 0],[150.890625, 75.03125, 0],[151.03125, 73.4375, 0],[151.21875, 72.0625, 0],[151.765625, 70.28125, 0],[152.671875, 68.09375, 0],[153.53125, 66.25, 0],[154.34375, 64.75, 0],[156.1875, 62.375, 0],[157.625, 60.75, 0]];
	this.head = [[125.375, 107.125, 0],[126.625, 102.875, 0],[127.671875, 98.734375, 0],[128.515625, 94.703125, 0],[129.15625, 90.78125, 0],[129.59375, 86.96875, 0],[129.828125, 83.265625, 0],[129.859375, 79.671875, 0],[129.6875, 76.1875, 0],[129.3125, 72.8125, 0],[128.875, 69.359375, 0],[128.375, 65.828125, 0],[127.8125, 62.21875, 0],[127.1875, 58.53125, 0],[126.5, 54.765625, 0],[125.75, 50.921875, 0],[124.9375, 47, 0],[124.0625, 43, 0],[123.1875, 39.203125, 0],[122.3125, 35.609375, 0],[121.4375, 32.21875, 0],[120.5625, 29.03125, 0],[119.6875, 26.046875, 0],[118.8125, 23.265625, 0],[117.9375, 20.6875, 0],[117.0625, 18.3125, 0],[116.5625, 16.078125, 0],[116.4375, 13.984375, 0],[116.6875, 12.03125, 0],[117.3125, 10.21875, 0],[118.3125, 8.546875, 0],[119.6875, 7.015625, 0],[121.4375, 5.625, 0],[123.5625, 4.375, 0],[125.890625, 3.296875, 0],[128.421875, 2.390625, 0],[131.15625, 1.65625, 0],[134.09375, 1.09375, 0],[137.234375, 0.703125, 0],[140.578125, 0.484375, 0],[144.125, 0.4375, 0],[147.875, 0.5625, 0],[151.5625, 0.703125, 0],[155.1875, 0.859375, 0],[158.75, 1.03125, 0],[162.25, 1.21875, 0],[165.6875, 1.421875, 0],[169.0625, 1.640625, 0],[172.375, 1.875, 0],[175.625, 2.125, 0],[178.875, 2.34375, 0],[182.125, 2.53125, 0],[185.375, 2.6875, 0],[188.625, 2.8125, 0],[191.875, 2.90625, 0],[195.125, 2.96875, 0],[198.375, 3, 0],[201.625, 3, 0],[204.828125, 3.234375, 0],[207.984375, 3.703125, 0],[211.09375, 4.40625, 0],[214.15625, 5.34375, 0],[217.171875, 6.515625, 0],[220.140625, 7.921875, 0],[223.0625, 9.5625, 0],[225.9375, 11.4375, 0],[228.59375, 13.59375, 0],[231.03125, 16.03125, 0],[233.25, 18.75, 0],[235.25, 21.75, 0],[237.03125, 25.03125, 0],[238.59375, 28.59375, 0],[239.9375, 32.4375, 0],[241.0625, 36.5625, 0],[242.09375, 40.671875, 0],[243.03125, 44.765625, 0],[243.875, 48.84375, 0],[244.625, 52.90625, 0],[245.28125, 56.953125, 0],[245.84375, 60.984375, 0],[246.3125, 65, 0],[246.6875, 69, 0],[247.171875, 72.78125, 0],[247.765625, 76.34375, 0],[248.46875, 79.6875, 0],[249.28125, 82.8125, 0],[250.203125, 85.71875, 0],[251.234375, 88.40625, 0],[252.375, 90.875, 0],[253.625, 93.125, 0],[254.671875, 95.40625, 0],[255.515625, 97.71875, 0],[256.15625, 100.0625, 0],[256.59375, 102.4375, 0],[256.828125, 104.84375, 0],[256.859375, 107.28125, 0],[256.6875, 109.75, 0],[256.3125, 112.25, 0],[255.640625, 114.59375, 0],[254.671875, 116.78125, 0],[253.40625, 118.8125, 0],[251.84375, 120.6875, 0],[249.984375, 122.40625, 0],[247.828125, 123.96875, 0],[245.375, 125.375, 0],[242.625, 126.625, 0],[239.59375, 127.671875, 0],[236.28125, 128.515625, 0],[232.6875, 129.15625, 0],[228.8125, 129.59375, 0],[224.65625, 129.828125, 0],[220.21875, 129.859375, 0],[215.5, 129.6875, 0],[210.5, 129.3125, 0],[205.6875, 128.9375, 0],[201.0625, 128.5625, 0],[196.625, 128.1875, 0],[192.375, 127.8125, 0],[188.3125, 127.4375, 0],[184.4375, 127.0625, 0],[180.75, 126.6875, 0],[177.25, 126.3125, 0],[173.71875, 125.984375, 0],[170.15625, 125.703125, 0],[166.5625, 125.46875, 0],[162.9375, 125.28125, 0],[159.28125, 125.140625, 0],[155.59375, 125.046875, 0],[151.875, 125, 0],[148.125, 125, 0],[144.625, 124.953125, 0],[141.375, 124.859375, 0],[138.375, 124.71875, 0],[135.625, 124.53125, 0],[133.34375, 124.34375, 0],[131.53125, 124.15625, 0],[130.1875, 123.96875, 0],[129.3125, 123.78125, 0],[128.375, 123.015625, 0],[127.375, 121.671875, 0],[126.59375, 120.375, 0],[126.03125, 119.125, 0],[125.5, 116.1875, 0],[125.25, 113.875, 0]];
	this.rightEar = [[92.8125, 9.4375, 0],[96.1875, 7.5625, 0],[99.453125, 6.1875, 0],[102.609375, 5.3125, 0],[105.65625, 4.9375, 0],[108.59375, 5.0625, 0],[111.421875, 5.6875, 0],[114.140625, 6.8125, 0],[116.75, 8.4375, 0],[119.25, 10.5625, 0],[121.78125, 12.78125, 0],[124.34375, 15.09375, 0],[126.9375, 17.5, 0],[129.5625, 20, 0],[132.21875, 22.59375, 0],[134.90625, 25.28125, 0],[137.625, 28.0625, 0],[140.375, 30.9375, 0],[143.0625, 33.90625, 0],[145.6875, 36.96875, 0],[148.25, 40.125, 0],[150.75, 43.375, 0],[153.1875, 46.71875, 0],[155.5625, 50.15625, 0],[157.875, 53.6875, 0],[160.125, 57.3125, 0],[161.703125, 60.59375, 0],[162.609375, 63.53125, 0],[162.84375, 66.125, 0],[162.40625, 68.375, 0],[161.296875, 70.28125, 0],[159.515625, 71.84375, 0],[157.0625, 73.0625, 0],[153.9375, 73.9375, 0],[150.859375, 74.71875, 0],[147.828125, 75.40625, 0],[144.84375, 76, 0],[141.90625, 76.5, 0],[139.015625, 76.90625, 0],[136.171875, 77.21875, 0],[133.375, 77.4375, 0],[130.625, 77.5625, 0],[128.15625, 77.390625, 0],[125.96875, 76.921875, 0],[124.0625, 76.15625, 0],[122.4375, 75.09375, 0],[121.09375, 73.734375, 0],[120.03125, 72.078125, 0],[119.25, 70.125, 0],[118.75, 67.875, 0],[118.171875, 65.59375, 0],[117.515625, 63.28125, 0],[116.78125, 60.9375, 0],[115.96875, 58.5625, 0],[115.078125, 56.15625, 0],[114.109375, 53.71875, 0],[113.0625, 51.25, 0],[111.9375, 48.75, 0],[110.734375, 46.34375, 0],[109.453125, 44.03125, 0],[108.09375, 41.8125, 0],[106.65625, 39.6875, 0],[105.140625, 37.65625, 0],[103.546875, 35.71875, 0],[101.875, 33.875, 0],[100.125, 32.125, 0],[98.390625, 30.4375, 0],[96.671875, 28.8125, 0],[94.96875, 27.25, 0],[93.28125, 25.75, 0],[91.8125, 24.46875, 0],[90.5625, 23.40625, 0],[89.53125, 22.5625, 0],[88.71875, 21.9375, 0],[88.125, 20.921875, 0],[87.75, 19.515625, 0],[87.578125, 18.265625, 0],[87.609375, 17.171875, 0],[88.5, 15.0625, 0],[89.375, 13.5, 0]];
	this.leftEar = [[201.3125, 154.125, 0],[201.6875, 149.875, 0],[202.171875, 145.578125, 0],[202.765625, 141.234375, 0],[203.46875, 136.84375, 0],[204.28125, 132.40625, 0],[205.203125, 127.921875, 0],[206.234375, 123.390625, 0],[207.375, 118.8125, 0],[208.625, 114.1875, 0],[210.046875, 109.796875, 0],[211.640625, 105.640625, 0],[213.40625, 101.71875, 0],[215.34375, 98.03125, 0],[217.453125, 94.578125, 0],[219.734375, 91.359375, 0],[222.1875, 88.375, 0],[224.8125, 85.625, 0],[227.4375, 83.0625, 0],[230.0625, 80.6875, 0],[232.6875, 78.5, 0],[235.3125, 76.5, 0],[237.9375, 74.6875, 0],[240.5625, 73.0625, 0],[243.1875, 71.625, 0],[245.8125, 70.375, 0],[248.28125, 69.546875, 0],[250.59375, 69.140625, 0],[252.75, 69.15625, 0],[254.75, 69.59375, 0],[256.59375, 70.453125, 0],[258.28125, 71.734375, 0],[259.8125, 73.4375, 0],[261.1875, 75.5625, 0],[262.5, 77.765625, 0],[263.75, 80.046875, 0],[264.9375, 82.40625, 0],[266.0625, 84.84375, 0],[267.125, 87.359375, 0],[268.125, 89.953125, 0],[269.0625, 92.625, 0],[269.9375, 95.375, 0],[270.40625, 97.90625, 0],[270.46875, 100.21875, 0],[270.125, 102.3125, 0],[269.375, 104.1875, 0],[268.21875, 105.84375, 0],[266.65625, 107.28125, 0],[264.6875, 108.5, 0],[262.3125, 109.5, 0],[260.0625, 110.625, 0],[257.9375, 111.875, 0],[255.9375, 113.25, 0],[254.0625, 114.75, 0],[252.3125, 116.375, 0],[250.6875, 118.125, 0],[249.1875, 120, 0],[247.8125, 122, 0],[246.5625, 124.203125, 0],[245.4375, 126.609375, 0],[244.4375, 129.21875, 0],[243.5625, 132.03125, 0],[242.8125, 135.046875, 0],[242.1875, 138.265625, 0],[241.6875, 141.6875, 0],[241.3125, 145.3125, 0],[240.984375, 148.734375, 0],[240.703125, 151.953125, 0],[240.46875, 154.96875, 0],[240.28125, 157.78125, 0],[240.140625, 160.390625, 0],[240.046875, 162.796875, 0],[240, 165, 0],[240, 167, 0],[239.71875, 168.6875, 0],[239.15625, 170.0625, 0],[238.3125, 171.125, 0],[237.1875, 171.875, 0],[235.78125, 172.3125, 0],[234.09375, 172.4375, 0],[232.125, 172.25, 0],[229.875, 171.75, 0],[227.5625, 171.296875, 0],[225.1875, 170.890625, 0],[222.75, 170.53125, 0],[220.25, 170.21875, 0],[218.03125, 169.96875, 0],[216.09375, 169.78125, 0],[214.4375, 169.65625, 0],[213.0625, 169.59375, 0],[211.390625, 168.984375, 0],[209.421875, 167.828125, 0],[207.796875, 166.6875, 0],[206.515625, 165.5625, 0],[204.6875, 162.8125, 0],[203.5, 160.625, 0]];
	this.back = [[240.4375, 193.6875, 0],[238.5625, 187.3125, 0],[236.734375, 181, 0],[234.953125, 174.75, 0],[233.21875, 168.5625, 0],[231.53125, 162.4375, 0],[229.890625, 156.375, 0],[228.296875, 150.375, 0],[226.75, 144.4375, 0],[225.25, 138.5625, 0],[224, 132.9375, 0],[223, 127.5625, 0],[222.25, 122.4375, 0],[221.75, 117.5625, 0],[221.5, 112.9375, 0],[221.5, 108.5625, 0],[221.75, 104.4375, 0],[222.25, 100.5625, 0],[222.78125, 96.78125, 0],[223.34375, 93.09375, 0],[223.9375, 89.5, 0],[224.5625, 86, 0],[225.21875, 82.59375, 0],[225.90625, 79.28125, 0],[226.625, 76.0625, 0],[227.375, 72.9375, 0],[228.03125, 69.71875, 0],[228.59375, 66.40625, 0],[229.0625, 63, 0],[229.4375, 59.5, 0],[229.71875, 55.90625, 0],[229.90625, 52.21875, 0],[230, 48.4375, 0],[230, 44.5625, 0],[229.65625, 41.03125, 0],[228.96875, 37.84375, 0],[227.9375, 35, 0],[226.5625, 32.5, 0],[224.84375, 30.34375, 0],[222.78125, 28.53125, 0],[220.375, 27.0625, 0],[217.625, 25.9375, 0],[214.640625, 24.9375, 0],[211.421875, 24.0625, 0],[207.96875, 23.3125, 0],[204.28125, 22.6875, 0],[200.359375, 22.1875, 0],[196.203125, 21.8125, 0],[191.8125, 21.5625, 0],[187.1875, 21.4375, 0],[182.59375, 21.390625, 0],[178.03125, 21.421875, 0],[173.5, 21.53125, 0],[169, 21.71875, 0],[164.53125, 21.984375, 0],[160.09375, 22.328125, 0],[155.6875, 22.75, 0],[151.3125, 23.25, 0],[147.125, 23.734375, 0],[143.125, 24.203125, 0],[139.3125, 24.65625, 0],[135.6875, 25.09375, 0],[132.25, 25.515625, 0],[129, 25.921875, 0],[125.9375, 26.3125, 0],[123.0625, 26.6875, 0],[120.40625, 27.375, 0],[117.96875, 28.375, 0],[115.75, 29.6875, 0],[113.75, 31.3125, 0],[111.96875, 33.25, 0],[110.40625, 35.5, 0],[109.0625, 38.0625, 0],[107.9375, 40.9375, 0],[107, 43.796875, 0],[106.25, 46.640625, 0],[105.6875, 49.46875, 0],[105.3125, 52.28125, 0],[105.125, 55.078125, 0],[105.125, 57.859375, 0],[105.3125, 60.625, 0],[105.6875, 63.375, 0],[106.171875, 66.171875, 0],[106.765625, 69.015625, 0],[107.46875, 71.90625, 0],[108.28125, 74.84375, 0],[109.203125, 77.828125, 0],[110.234375, 80.859375, 0],[111.375, 83.9375, 0],[112.625, 87.0625, 0],[113.8125, 90.359375, 0],[114.9375, 93.828125, 0],[116, 97.46875, 0],[117, 101.28125, 0],[117.9375, 105.265625, 0],[118.8125, 109.421875, 0],[119.625, 113.75, 0],[120.375, 118.25, 0],[121.046875, 122.828125, 0],[121.640625, 127.484375, 0],[122.15625, 132.21875, 0],[122.59375, 137.03125, 0],[122.953125, 141.921875, 0],[123.234375, 146.890625, 0],[123.4375, 151.9375, 0],[123.5625, 157.0625, 0],[123.640625, 162.03125, 0],[123.671875, 166.84375, 0],[123.65625, 171.5, 0],[123.59375, 176, 0],[123.484375, 180.34375, 0],[123.328125, 184.53125, 0],[123.125, 188.5625, 0],[122.875, 192.4375, 0],[122.5625, 196.328125, 0],[122.1875, 200.234375, 0],[121.75, 204.15625, 0],[121.25, 208.09375, 0],[120.6875, 212.046875, 0],[120.0625, 216.015625, 0],[119.375, 220, 0],[118.625, 224, 0],[117.96875, 227.84375, 0],[117.40625, 231.53125, 0],[116.9375, 235.0625, 0],[116.5625, 238.4375, 0],[116.28125, 241.65625, 0],[116.09375, 244.71875, 0],[116, 247.625, 0],[116, 250.375, 0],[116.5, 252.6875, 0],[117.5, 254.5625, 0],[119, 256, 0],[121, 257, 0],[123.5, 257.5625, 0],[126.5, 257.6875, 0],[130, 257.375, 0],[134, 256.625, 0],[137.84375, 255.796875, 0],[141.53125, 254.890625, 0],[145.0625, 253.90625, 0],[148.4375, 252.84375, 0],[151.65625, 251.703125, 0],[154.71875, 250.484375, 0],[157.625, 249.1875, 0],[160.375, 247.8125, 0],[163.15625, 246.59375, 0],[165.96875, 245.53125, 0],[168.8125, 244.625, 0],[171.6875, 243.875, 0],[174.59375, 243.28125, 0],[177.53125, 242.84375, 0],[180.5, 242.5625, 0],[183.5, 242.4375, 0],[186.453125, 242.21875, 0],[189.359375, 241.90625, 0],[192.21875, 241.5, 0],[195.03125, 241, 0],[197.796875, 240.40625, 0],[200.515625, 239.71875, 0],[203.1875, 238.9375, 0],[205.8125, 238.0625, 0],[208.265625, 237.234375, 0],[210.546875, 236.453125, 0],[212.65625, 235.71875, 0],[214.59375, 235.03125, 0],[216.359375, 234.390625, 0],[217.953125, 233.796875, 0],[219.375, 233.25, 0],[220.625, 232.75, 0],[222.0625, 232.078125, 0],[223.6875, 231.234375, 0],[225.5, 230.21875, 0],[227.5, 229.03125, 0],[229.34375, 227.90625, 0],[231.03125, 226.84375, 0],[232.5625, 225.84375, 0],[233.9375, 224.90625, 0],[235.421875, 222.9375, 0],[237.015625, 219.9375, 0],[238.265625, 217.171875, 0],[239.171875, 214.640625, 0],[240.0625, 209.25, 0],[240.5, 205.125, 0]];
	this.backLeftArm = [[231.375, 89.9375, 0],[234.625, 91.0625, 0],[238.25, 92.328125, 0],[242.25, 93.734375, 0],[246.625, 95.28125, 0],[251.375, 96.96875, 0],[256.5, 98.796875, 0],[262, 100.765625, 0],[267.875, 102.875, 0],[274.125, 105.125, 0],[280.140625, 107.296875, 0],[285.921875, 109.390625, 0],[291.46875, 111.40625, 0],[296.78125, 113.34375, 0],[301.859375, 115.203125, 0],[306.703125, 116.984375, 0],[311.3125, 118.6875, 0],[315.6875, 120.3125, 0],[320.125, 121.78125, 0],[324.625, 123.09375, 0],[329.1875, 124.25, 0],[333.8125, 125.25, 0],[338.5, 126.09375, 0],[343.25, 126.78125, 0],[348.0625, 127.3125, 0],[352.9375, 127.6875, 0],[357.171875, 127.765625, 0],[360.765625, 127.546875, 0],[363.71875, 127.03125, 0],[366.03125, 126.21875, 0],[367.703125, 125.109375, 0],[368.734375, 123.703125, 0],[369.125, 122, 0],[368.875, 120, 0],[368.34375, 118.109375, 0],[367.53125, 116.328125, 0],[366.4375, 114.65625, 0],[365.0625, 113.09375, 0],[363.40625, 111.640625, 0],[361.46875, 110.296875, 0],[359.25, 109.0625, 0],[356.75, 107.9375, 0],[354.0625, 106.75, 0],[351.1875, 105.5, 0],[348.125, 104.1875, 0],[344.875, 102.8125, 0],[341.4375, 101.375, 0],[337.8125, 99.875, 0],[334, 98.3125, 0],[330, 96.6875, 0],[326.09375, 95.046875, 0],[322.28125, 93.390625, 0],[318.5625, 91.71875, 0],[314.9375, 90.03125, 0],[311.40625, 88.328125, 0],[307.96875, 86.609375, 0],[304.625, 84.875, 0],[301.375, 83.125, 0],[298.109375, 81.40625, 0],[294.828125, 79.71875, 0],[291.53125, 78.0625, 0],[288.21875, 76.4375, 0],[284.890625, 74.84375, 0],[281.546875, 73.28125, 0],[278.1875, 71.75, 0],[274.8125, 70.25, 0],[271.65625, 68.703125, 0],[268.71875, 67.109375, 0],[266, 65.46875, 0],[263.5, 63.78125, 0],[261.21875, 62.046875, 0],[259.15625, 60.265625, 0],[257.3125, 58.4375, 0],[255.6875, 56.5625, 0],[253.921875, 54.734375, 0],[252.015625, 52.953125, 0],[249.96875, 51.21875, 0],[247.78125, 49.53125, 0],[245.453125, 47.890625, 0],[242.984375, 46.296875, 0],[240.375, 44.75, 0],[237.625, 43.25, 0],[234.828125, 41.78125, 0],[231.984375, 40.34375, 0],[229.09375, 38.9375, 0],[226.15625, 37.5625, 0],[223.171875, 36.21875, 0],[220.140625, 34.90625, 0],[217.0625, 33.625, 0],[213.9375, 32.375, 0],[211.203125, 31.625, 0],[208.859375, 31.375, 0],[206.90625, 31.625, 0],[205.34375, 32.375, 0],[204.171875, 33.625, 0],[203.390625, 35.375, 0],[203, 37.625, 0],[203, 40.375, 0],[203.03125, 43.09375, 0],[203.09375, 45.78125, 0],[203.1875, 48.4375, 0],[203.3125, 51.0625, 0],[203.46875, 53.65625, 0],[203.65625, 56.21875, 0],[203.875, 58.75, 0],[204.125, 61.25, 0],[204.34375, 63.671875, 0],[204.53125, 66.015625, 0],[204.6875, 68.28125, 0],[204.8125, 70.46875, 0],[204.90625, 72.578125, 0],[204.96875, 74.609375, 0],[205, 76.5625, 0],[205, 78.4375, 0],[205.234375, 80.09375, 0],[205.703125, 81.53125, 0],[206.40625, 82.75, 0],[207.34375, 83.75, 0],[208.28125, 84.515625, 0],[209.21875, 85.046875, 0],[210.15625, 85.34375, 0],[211.09375, 85.40625, 0],[212.671875, 85.625, 0],[214.890625, 86, 0],[216.875, 86.359375, 0],[218.625, 86.703125, 0],[222.0625, 87.5, 0],[224.625, 88.125, 0]];
	this.backRightArm = [[94.1875, 49.4375, 0],[90.8125, 53.5625, 0],[87.703125, 57.515625, 0],[84.859375, 61.296875, 0],[82.28125, 64.90625, 0],[79.96875, 68.34375, 0],[77.921875, 71.609375, 0],[76.140625, 74.703125, 0],[74.625, 77.625, 0],[73.375, 80.375, 0],[72.078125, 83.15625, 0],[70.734375, 85.96875, 0],[69.34375, 88.8125, 0],[67.90625, 91.6875, 0],[66.421875, 94.59375, 0],[64.890625, 97.53125, 0],[63.3125, 100.5, 0],[61.6875, 103.5, 0],[60.203125, 106.46875, 0],[58.859375, 109.40625, 0],[57.65625, 112.3125, 0],[56.59375, 115.1875, 0],[55.671875, 118.03125, 0],[54.890625, 120.84375, 0],[54.25, 123.625, 0],[53.75, 126.375, 0],[53.125, 129.171875, 0],[52.375, 132.015625, 0],[51.5, 134.90625, 0],[50.5, 137.84375, 0],[49.375, 140.828125, 0],[48.125, 143.859375, 0],[46.75, 146.9375, 0],[45.25, 150.0625, 0],[44.21875, 152.828125, 0],[43.65625, 155.234375, 0],[43.5625, 157.28125, 0],[43.9375, 158.96875, 0],[44.78125, 160.296875, 0],[46.09375, 161.265625, 0],[47.875, 161.875, 0],[50.125, 162.125, 0],[52.21875, 162.03125, 0],[54.15625, 161.59375, 0],[55.9375, 160.8125, 0],[57.5625, 159.6875, 0],[59.03125, 158.21875, 0],[60.34375, 156.40625, 0],[61.5, 154.25, 0],[62.5, 151.75, 0],[63.578125, 149.078125, 0],[64.734375, 146.234375, 0],[65.96875, 143.21875, 0],[67.28125, 140.03125, 0],[68.671875, 136.671875, 0],[70.140625, 133.140625, 0],[71.6875, 129.4375, 0],[73.3125, 125.5625, 0],[74.828125, 122, 0],[76.234375, 118.75, 0],[77.53125, 115.8125, 0],[78.71875, 113.1875, 0],[79.796875, 110.875, 0],[80.765625, 108.875, 0],[81.625, 107.1875, 0],[82.375, 105.8125, 0],[83.40625, 104.140625, 0],[84.71875, 102.171875, 0],[86.3125, 99.90625, 0],[88.1875, 97.34375, 0],[90.34375, 94.484375, 0],[92.78125, 91.328125, 0],[95.5, 87.875, 0],[98.5, 84.125, 0],[101.40625, 80.65625, 0],[104.21875, 77.46875, 0],[106.9375, 74.5625, 0],[109.5625, 71.9375, 0],[112.09375, 69.59375, 0],[114.53125, 67.53125, 0],[116.875, 65.75, 0],[119.125, 64.25, 0],[121.09375, 62.40625, 0],[122.78125, 60.21875, 0],[124.1875, 57.6875, 0],[125.3125, 54.8125, 0],[126.15625, 51.59375, 0],[126.71875, 48.03125, 0],[127, 44.125, 0],[127, 39.875, 0],[126.671875, 36.3125, 0],[126.015625, 33.4375, 0],[125.03125, 31.25, 0],[123.71875, 29.75, 0],[122.40625, 28.78125, 0],[121.09375, 28.34375, 0],[119.78125, 28.4375, 0],[118.46875, 29.0625, 0],[116.40625, 30.359375, 0],[113.59375, 32.328125, 0],[111.109375, 34.140625, 0],[108.953125, 35.796875, 0],[104.875, 39.3125, 0],[101.875, 42, 0]];
};

mewtoo.prototype.drawFront = function() {
    push();
	translate(0, 50);
	translate(this.position.x, this.position.y);
    scale(this.size * 0.35);
    push();
    translate(0, 60);
    stroke(0, 0, 0);
    fill(219, 219, 219);
    quad(199, 260, 260, 270, 270, 300, 189, 285);
    quad(235, 200, 240, 290, 210, 280, 215, 200);
    quad(199, 270, 260, 285, 270, 315, 189, 295);
    ellipse(215, 190, 70, 90);
    rect(187, 10, 15, 50);
	push();
	translate(0, -55);
	drawPart(this.leftArm, 1);
	pop();
    //noStroke();
    fill(151, 33, 184);
	fill(214, 214, 214);
	push();
	drawPart(this.body, 1);
	pop();
	push();
	fill(230, 230, 230);
	translate(5,5);
	drawPart(this.chest, 1);
	pop();
	fill(151, 33, 184);
	ellipse(50, 38, 20, 20);
	ellipse(60, 34, 18, 18);    
	ellipse(67, 33, 18, 18);
	ellipse(77, 38, 18, 18);
	ellipse(83, 48, 18, 18);
	ellipse(85, 58, 18, 18);
	ellipse(85, 68, 18, 18);	
	ellipse(84, 77, 18, 18);
	ellipse(80, 88, 20, 20);
	ellipse(75, 100, 25, 25);
	ellipse(70, 115, 30, 30);
	ellipse(66, 135, 35, 40);
	ellipse(64, 150, 40, 45);
	ellipse(63, 170, 45, 54);
	ellipse(66, 190, 50, 55);
	ellipse(75, 210, 50, 60);
	ellipse(90, 225, 50, 60);
	ellipse(110, 240, 60, 65);
	ellipse(130, 250, 60, 70);	
	ellipse(140, 250, 60, 70);    
    ellipse(155, 242, 60, 65);	
	ellipse(170, 230, 50, 60);
	ellipse(180, 215, 50, 60);    
	ellipse(190, 205, 50, 60);
    ellipse(195, 195, 50, 60);

    fill(215, 17, 237);
    ellipse(40, 46, 22, 22);
    push();
    rotate(Math.PI / 8);
    translate(22, -9);
    ellipse(30, 56, 29, 42);
    pop();
    
    stroke(0);
    fill(214, 214, 214);
   
    //leg
    push();
    rotate(Math.PI/  58);
    translate(12, -15);
    fill(222, 222, 222);
    quad(103, 335, 118, 295, 130, 301, 127,  340);
    quad(130, 340, 130, 300, 160, 295, 155,  345);
    pop();
    quad(120, 235, 150, 245, 150, 320, 110, 310);
	
	push();
	drawPart(this.rightArm, 1);
	pop();
    //hands
	push();
	scale(0.9);
	translate(15, 66);
	fill(180, 180, 180);
    triangle(117.5, 100, 72.5, 100, 95, 62.5);
	fill(240, 240, 240);
    ellipse(120, 100, 15, 15);
    ellipse(70, 100, 15, 15);
    ellipse(95, 60, 15, 15);
	pop();
    stroke(0);
    fill(219, 219, 219);
    
    
    //knee
    push();
    rotate(Math.PI / 16);
    translate(35, -30);
    ellipse(150, 195, 80, 100);
    pop();
	//left hand
	fill(180, 180, 180);
    triangle(281, 165, 306, 151, 286, 139);
	fill(240, 240, 240);
    ellipse(281, 165, 10, 10);
    ellipse(307, 151, 10, 10);
    ellipse(286, 139, 10, 10);
    
	push();
	translate(5, -87);
	push();
	fill(210, 210, 210);
	drawPart(this.head, 1);
	pop();
	fill(178, 71, 255);
    ellipse(160, 80, 20, 20);
    ellipse(222, 75, 18, 20);
    fill(230, 230, 230);
    quad(150, 55, 180, 70,180, 85, 145, 65);
    quad(233, 50, 208, 65,210, 80, 235, 60);  
    bezier(230, 120, 220, 110, 190, 110, 185, 110);
    pop();
	
	fill(210, 210, 210);
	push();
	translate(7, -120);
	drawPart(this.rightEar, 1);
	pop();
	push();
	translate(5, -215);
	drawPart(this.leftEar, 1);
	pop();
	
	
	pop();
};

mewtoo.prototype.drawBack = function() {
    push();
    translate(this.position.x, this.position.y);
	translate(-50 + (1-this.size/0.8)*50, -30 + (1-this.size/0.8)*30);
    scale(this.size);
    strokeWeight(1);	
	stroke(0);
	fill(214, 214, 214);
	rect(155, 0, 20, 40);
	push();
	translate(-20, -250);
	drawPart(this.leftEar, 1);
	pop();
	push();
	translate(-10, -170);
	drawPart(this.rightEar, 1);
	pop();
	push();
	translate(-10, -110);
	scale(0.95);
	drawPart(this.head, 1);
	pop();
	push();
	translate(-3, 5);
	fill(240, 240, 240);
	ellipse(360, 105, 15, 15);
	ellipse(380, 105, 15, 15);
	ellipse(375, 125, 15, 15);
	fill(180, 180, 180);
	triangle(360, 105, 380, 105, 375, 125);
	pop();
	push();
	drawPart(this.backRightArm, 1);
	pop();
	push();
	drawPart(this.backLeftArm, 1);
	pop();
	
	push();
	drawPart(this.back, 1);
	pop();
    push();
    //leg
    push();
    translate(0, -15);
    push();
    rotate(Math.PI/  58);
    translate(12, -20);
    fill(222, 222, 222);
    quad(103, 335, 118, 295, 130, 301, 127,  340);
    quad(130, 340, 130, 300, 160, 295, 155,  345);
    pop();
    quad(120, 235, 150, 245, 150, 320, 110, 310);
    stroke(0);
    fill(219, 219, 219);
    //knee
    push();
    rotate(Math.PI / 16);
    translate(35, -30);
    ellipse(145, 200, 60, 80);
    pop();
    
    pop();
	
	push();
	translate(-15, 0);
    stroke(0);
    fill(151, 33, 184);
    ellipse(195, 177, 60, 60);
    ellipse(200, 200, 60, 60);
    ellipse(190, 215, 60, 60);    
    ellipse(180, 230, 60, 60);
    ellipse(165, 242, 60, 65);
    ellipse(150, 250, 60, 70);    
    ellipse(130, 250, 60, 70);
    ellipse(110, 240, 60, 65);
    ellipse(90, 225, 50, 60);
    ellipse(75, 210, 50, 60);
    ellipse(66, 190, 50, 55);
    ellipse(63, 170, 45, 54);
    ellipse(64, 150, 40, 45);
    ellipse(66, 135, 35, 40);
    ellipse(70, 115, 30, 30);
    ellipse(75, 100, 25, 25);
    ellipse(80, 88, 20, 20);
    ellipse(84, 77, 18, 18);
    ellipse(85, 68, 18, 18);
    ellipse(85, 58, 18, 18);
    ellipse(83, 48, 18, 18);
    ellipse(77, 38, 18, 18);
    ellipse(67, 33, 18, 18);
    ellipse(60, 34, 18, 18);    
    ellipse(50, 38, 20, 20);
    fill(215, 17, 237);
    ellipse(40, 46, 22, 22);
    push();
    rotate(Math.PI / 8);
    translate(22, -9);
    ellipse(30, 56, 29, 42);
    pop();
	pop();
    
    stroke(0);
    fill(214, 214, 214);
    
    stroke(0, 0, 0);
    fill(219, 219, 219);
    quad(199, 270, 260, 280, 270, 310, 189, 295);
    quad(235, 210, 240, 300, 210, 290, 215, 210);
    quad(199, 280, 260, 295, 270, 325, 189, 305);
        
    push();
    rotate(Math.PI / -24);
    translate(-20, 20);
    ellipse(205, 190, 70, 90);   
    pop();
	
    pop();
};