const singleNumber = function (nums) {
    if (nums.length < 0) {
        return 0
    }
    let num = 0;
    for (let i = 0; i < nums.length; i++) {
        num ^= nums[i]
        console.log(num, nums[i]);
    }
    return num
}
let array = [229, -967, 355, 349, -999, -536, -810, 923, -834, -74, 915, 943, -656, 742, 778, 350, 888, 319, -283, 721, 449, 877, 276, 953, 979, 400, -642, 15, 124, 278, -772, -24, 275, -632, 635, 354, -534, 394, 634, 470, 339, -28, 989, 646, 653, -969, 720, -212, 796, 530, 231, -59, 682, 102, 286, 191, -214, 855, -728, -231, 607, -902, -573, 221, -169, -977, 661, -151, 766, 405, 956, 18, 919, 445, -273, -179, -62, 402, 344, 985, 597, -649, -55, -662, 610, -946, 20, 677, 802, -396, 360, -484, -901, -492, 113, -10, 223, -217, 949, -4, 921, 987, 141, -60, -584, 620, 505, 955, -625, 631, 24, -394, -99, 741, 507, -141, -143, 629, -528, 545, 852, 633, -15, -70, 700, -352, -178, 105, 353, -281, 338, -604, 756, -547, 901, 305, 306, -641, -879, 983, 43, -104, 733, -64, 683, -736, -589, -671, 602, 7, 67, -844, 471, -67, -831, 625, -688, 548, 433, 143, 180, 63, -221, 591, 940, 451, 27, 193, 429, 590, 585, -644, -427, -314, 479, 322, -732, -56, 928, -822, 572, -390, 245, -90, -403, -158, -447, -142, 958, 378, 856, 103, 762, 443, 199, 876, -932, -826, -668, -718, 632, -754, 547, -679, 232, -189, 363, -552, -757, 803, -522, -538, -91, -765, 892, -503, -837, 502, -43, -341, -267, -364, 269, -815, 828, 674, 37, 881, 237, 662, 874, 857, 503, -619, 165, 0, 312, -317, -412, 266, -335, 42, 182, -971, 699, 810, -903, -730, -512, 826, -872, -646, 452, -693, 258, -639, 393, -851, 34, 140, -131, -162, -411, 238, 151, -245, 283, 895, -611, 444, 708, -914, -336, -42, 975, 430, -39, -542, -889, -609, -36, -921, -893, 815, -771, 948, -275, 22, 957, 475, 938, -747, -970, 115, -544, -909, 39, -845, -749, 164, -698, -18, 679, 270, 155, 685, 209, -465, -84, 511, 57, -148, -371, -96, 918, -843, -660, 87, -696, -814, -362, -695, 544, -939, -44, 931, -227, 640, -234, -68, 368, 758, 945, 291, -995, -721, 951, 100, -345, -346, -796, 337, 711, -949, -375, 794, 529, -835, -915, -487, -577, 399, 981, 144, -905, 412, -928, 695, 656, 501, -593, -414, -854, 41, -155, 200, 965, 166, -599, 352, 324, 808, 952, -638, -58, 211, 834, -951, 77, -773, -920, 658, 467, 924, -357, -752, -941, -998, 66, -19, -820, -240, -774, 407, 189, -643, -802, 253, -187, -304, 563, 690, 522, -867, -347, 746, -442, -973, -993, 361, -985, 61, 161, 871, 976, -988, 549, 397, 588, -288, 630, 440, -824, -635, -989, 665, -546, 10, 315, 156, -421, -126, 811, -491, -117, -177, 47, 116, -349, -27, 749, -664, 823, -597, 893, -122, -129, 600, 698, -813, -262, 233, 804, -258, 97, 798, 229, -967, 355, 349, -999, -536, -810, 923, -834, -74, 915, 943, -656, 742, 778, 350, 888, 319, -283, 721, 449, 877, 276, 953, 979, 400, -642, 15, 124, 278, -772, -24, 275, -632, 635, 354, -534, 394, 634, 470, 339, -28, 989, 646, 653, -969, 720, -212, 796, 530, 231, -59, 682, 102, 286, 191, -214, 855, -728, -231, 607, -902, -573, 221, -169, -977, 661, -151, 766, 405, 956, 18, 919, 445, -273, -179, -62, 402, 344, 985, 597, -649, -55, -662, 610, -946, 20, 677, 802, -396, 360, -484, -901, -492, 113, -10, 223, -217, 949, -4, 921, 987, 141, -60, -584, 620, 505, 955, -625, 631, 24, -394, -99, 741, 507, -141, -143, 629, -528, 545, 852, 633, -15, -70, 700, -352, -178, 105, 353, -281, 338, -604, 756, -547, 901, 305, 306, -641, -879, 983, 43, -104, 733, -64, 683, -736, -589, -671, 602, 7, 67, -844, 471, -67, -831, 625, -688, 548, 433, 143, 180, 63, -221, 591, 940, 451, 27, 193, 429, 590, 585, -644, -427, -314, 479, 322, -732, -56, 928, -822, 572, -390, 245, -90, -403, -158, -447, -142, 958, 378, 856, 103, 762, 443, 199, 876, -932, -826, -668, -718, 632, -754, 547, -679, 232, -189, 363, -552, -757, 803, -522, -538, -91, -765, 892, -503, -837, 502, -43, -341, -267, -364, 269, -815, 828, 674, 37, 881, 237, 662, 874, 857, 503, -619, 165, 0, 312, -317, -412, 266, -335, 42, 182, -971, 699, 810, -903, -730, -512, 826, -872, -646, 452, -693, 258, -639, 393, -851, 34, 140, -131, -162, -411, 238, 151, -245, 283, 895, -611, 444, 708, -914, -336, -42, 975, 430, -39, -542, -889, -609, -36, -921, -893, 815, -771, 948, -275, 22, 957, 475, 938, -747, -970, 115, -544, -909, 39, -845, -749, 164, -698, -18, 679, 270, 155, 685, 209, -465, -84, 511, 57, -148, -371, -96, 918, -843, -660, 87, -696, -814, -362, -695, 544, -939, -44, 931, -227, 640, -234, -68, 368, 758, 945, 291, -995, -721, 951, 100, -345, -346, -796, 337, 711, -949, -375, 794, 529, -835, -915, -487, -577, 399, 981, 144, -905, 412, -928, 695, 656, 501, -593, -414, -854, 41, -155, 200, 965, 166, -599, 352, 324, 808, 952, -638, -58, 211, 834, -951, 77, -773, -920, 658, 467, 924, -357, -752, -941, -998, 66, -19, -820, -240, -774, 407, 189, -643, -802, 253, -187, -304, 563, 690, 522, -867, -347, 746, -442, -973, -993, 361, -985, 61, 161, 871, 976, -988, 549, 397, 588, -288, 630, 440, -824, -635, -989, 665, -546, 10, 315, 156, -421, -126, 811, -491, -117, -177, 47, 116, -349, -27, 749, -664, 823, -597, 893, -122, -129, 600, 698, -813, -262, 233, 804, -258, 97, 798, -77]
console.log('num : ', singleNumber(array));
