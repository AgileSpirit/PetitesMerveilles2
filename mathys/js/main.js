$(document).ready(function()
{
  console.log("Initialize application...");
  var images = '[ \
    { "id" : 2073, "title" : "", "small" : "img/small/DSC_2073.png", "medium" : "img/medium/DSC_2073.jpg", "big" : "img/big/DSC_2073.jpg" }, \
    { "id" : 2074, "title" : "", "small" : "img/small/DSC_2074.png", "medium" : "img/medium/DSC_2074.jpg", "big" : "img/big/DSC_2074.jpg" }, \
    { "id" : 2079, "title" : "", "small" : "img/small/DSC_2079.png", "medium" : "img/medium/DSC_2079.jpg", "big" : "img/big/DSC_2079.jpg" }, \
    { "id" : 2090, "title" : "", "small" : "img/small/DSC_2090.png", "medium" : "img/medium/DSC_2090.jpg", "big" : "img/big/DSC_2090.jpg" }, \
    { "id" : 2092, "title" : "", "small" : "img/small/DSC_2092.png", "medium" : "img/medium/DSC_2092.jpg", "big" : "img/big/DSC_2092.jpg" }, \
    { "id" : 2094, "title" : "", "small" : "img/small/DSC_2094.png", "medium" : "img/medium/DSC_2094.jpg", "big" : "img/big/DSC_2094.jpg" }, \
    { "id" : 2101, "title" : "", "small" : "img/small/DSC_2101.png", "medium" : "img/medium/DSC_2101.jpg", "big" : "img/big/DSC_2101.jpg" }, \
    { "id" : 2102, "title" : "", "small" : "img/small/DSC_2102.png", "medium" : "img/medium/DSC_2102.jpg", "big" : "img/big/DSC_2102.jpg" }, \
    { "id" : 2105, "title" : "", "small" : "img/small/DSC_2105.png", "medium" : "img/medium/DSC_2105.jpg", "big" : "img/big/DSC_2105.jpg" }, \
    { "id" : 2107, "title" : "", "small" : "img/small/DSC_2107.png", "medium" : "img/medium/DSC_2107.jpg", "big" : "img/big/DSC_2107.jpg" }, \
    { "id" : 2118, "title" : "", "small" : "img/small/DSC_2118.png", "medium" : "img/medium/DSC_2118.jpg", "big" : "img/big/DSC_2118.jpg" }, \
    { "id" : 2124, "title" : "", "small" : "img/small/DSC_2124.png", "medium" : "img/medium/DSC_2124.jpg", "big" : "img/big/DSC_2124.jpg" }, \
    { "id" : 2126, "title" : "", "small" : "img/small/DSC_2126.png", "medium" : "img/medium/DSC_2126.jpg", "big" : "img/big/DSC_2126.jpg" }, \
    { "id" : 2129, "title" : "", "small" : "img/small/DSC_2129.png", "medium" : "img/medium/DSC_2129.jpg", "big" : "img/big/DSC_2129.jpg" }, \
    { "id" : 2136, "title" : "", "small" : "img/small/DSC_2136.png", "medium" : "img/medium/DSC_2136.jpg", "big" : "img/big/DSC_2136.jpg" }, \
    { "id" : 2137, "title" : "", "small" : "img/small/DSC_2137.png", "medium" : "img/medium/DSC_2137.jpg", "big" : "img/big/DSC_2137.jpg" }, \
    { "id" : 7071, "title" : "", "small" : "img/small/DSC_7071.png", "medium" : "img/medium/DSC_7071.jpg", "big" : "img/big/DSC_7071.jpg" }, \
    { "id" : 7074, "title" : "", "small" : "img/small/DSC_7074.png", "medium" : "img/medium/DSC_7074.jpg", "big" : "img/big/DSC_7074.jpg" }, \
    { "id" : 7076, "title" : "", "small" : "img/small/DSC_7076.png", "medium" : "img/medium/DSC_7076.jpg", "big" : "img/big/DSC_7076.jpg" }, \
    { "id" : 7078, "title" : "", "small" : "img/small/DSC_7078.png", "medium" : "img/medium/DSC_7078.jpg", "big" : "img/big/DSC_7078.jpg" }, \
    { "id" : 7083, "title" : "", "small" : "img/small/DSC_7083.png", "medium" : "img/medium/DSC_7083.jpg", "big" : "img/big/DSC_7083.jpg" }, \
    { "id" : 7086, "title" : "", "small" : "img/small/DSC_7086.png", "medium" : "img/medium/DSC_7086.jpg", "big" : "img/big/DSC_7086.jpg" }, \
    { "id" : 7107, "title" : "", "small" : "img/small/DSC_7107.png", "medium" : "img/medium/DSC_7107.jpg", "big" : "img/big/DSC_7107.jpg" }, \
    { "id" : 7111, "title" : "", "small" : "img/small/DSC_7111.png", "medium" : "img/medium/DSC_7111.jpg", "big" : "img/big/DSC_7111.jpg" }, \
    { "id" : 7112, "title" : "", "small" : "img/small/DSC_7112.png", "medium" : "img/medium/DSC_7112.jpg", "big" : "img/big/DSC_7112.jpg" }, \
    { "id" : 7114, "title" : "", "small" : "img/small/DSC_7114.png", "medium" : "img/medium/DSC_7114.jpg", "big" : "img/big/DSC_7114.jpg" }, \
    { "id" : 7133, "title" : "", "small" : "img/small/DSC_7133.png", "medium" : "img/medium/DSC_7133.jpg", "big" : "img/big/DSC_7133.jpg" }, \
    { "id" : 7137, "title" : "", "small" : "img/small/DSC_7137.png", "medium" : "img/medium/DSC_7137.jpg", "big" : "img/big/DSC_7137.jpg" }, \
    { "id" : 7142, "title" : "", "small" : "img/small/DSC_7142.png", "medium" : "img/medium/DSC_7142.jpg", "big" : "img/big/DSC_7142.jpg" }, \
    { "id" : 7144, "title" : "", "small" : "img/small/DSC_7144.png", "medium" : "img/medium/DSC_7144.jpg", "big" : "img/big/DSC_7144.jpg" }, \
    { "id" : 7145, "title" : "", "small" : "img/small/DSC_7145.png", "medium" : "img/medium/DSC_7145.jpg", "big" : "img/big/DSC_7145.jpg" }, \
    { "id" : 7148, "title" : "", "small" : "img/small/DSC_7148.png", "medium" : "img/medium/DSC_7148.jpg", "big" : "img/big/DSC_7148.jpg" }, \
    { "id" : 7151, "title" : "", "small" : "img/small/DSC_7151.png", "medium" : "img/medium/DSC_7151.jpg", "big" : "img/big/DSC_7151.jpg" }, \
    { "id" : 7156, "title" : "", "small" : "img/small/DSC_7156.png", "medium" : "img/medium/DSC_7156.jpg", "big" : "img/big/DSC_7156.jpg" }, \
    { "id" : 7167, "title" : "", "small" : "img/small/DSC_7167.png", "medium" : "img/medium/DSC_7167.jpg", "big" : "img/big/DSC_7167.jpg" }, \
    { "id" : 7172, "title" : "", "small" : "img/small/DSC_7172.png", "medium" : "img/medium/DSC_7172.jpg", "big" : "img/big/DSC_7172.jpg" }, \
    { "id" : 7178, "title" : "", "small" : "img/small/DSC_7178.png", "medium" : "img/medium/DSC_7178.jpg", "big" : "img/big/DSC_7178.jpg" }, \
    { "id" : 7182, "title" : "", "small" : "img/small/DSC_7182.png", "medium" : "img/medium/DSC_7182.jpg", "big" : "img/big/DSC_7182.jpg" }, \
    { "id" : 7184, "title" : "", "small" : "img/small/DSC_7184.png", "medium" : "img/medium/DSC_7184.jpg", "big" : "img/big/DSC_7184.jpg" }, \
    { "id" : 7185, "title" : "", "small" : "img/small/DSC_7185.png", "medium" : "img/medium/DSC_7185.jpg", "big" : "img/big/DSC_7185.jpg" }, \
    { "id" : 7186, "title" : "", "small" : "img/small/DSC_7186.png", "medium" : "img/medium/DSC_7186.jpg", "big" : "img/big/DSC_7186.jpg" }, \
    { "id" : 7189, "title" : "", "small" : "img/small/DSC_7189.png", "medium" : "img/medium/DSC_7189.jpg", "big" : "img/big/DSC_7189.jpg" }, \
    { "id" : 7197, "title" : "", "small" : "img/small/DSC_7197.png", "medium" : "img/medium/DSC_7197.jpg", "big" : "img/big/DSC_7197.jpg" }, \
    { "id" : 7203, "title" : "", "small" : "img/small/DSC_7203.png", "medium" : "img/medium/DSC_7203.jpg", "big" : "img/big/DSC_7203.jpg" }, \
    { "id" : 7222, "title" : "", "small" : "img/small/DSC_7222.png", "medium" : "img/medium/DSC_7222.jpg", "big" : "img/big/DSC_7222.jpg" }, \
    { "id" : 7253, "title" : "", "small" : "img/small/DSC_7253.png", "medium" : "img/medium/DSC_7253.jpg", "big" : "img/big/DSC_7253.jpg" }, \
    { "id" : 7261, "title" : "", "small" : "img/small/DSC_7261.png", "medium" : "img/medium/DSC_7261.jpg", "big" : "img/big/DSC_7261.jpg" }, \
    { "id" : 7266, "title" : "", "small" : "img/small/DSC_7266.png", "medium" : "img/medium/DSC_7266.jpg", "big" : "img/big/DSC_7266.jpg" }, \
    { "id" : 7275, "title" : "", "small" : "img/small/DSC_7275.png", "medium" : "img/medium/DSC_7275.jpg", "big" : "img/big/DSC_7275.jpg" }, \
    { "id" : 7280, "title" : "", "small" : "img/small/DSC_7280.png", "medium" : "img/medium/DSC_7280.jpg", "big" : "img/big/DSC_7280.jpg" }, \
    { "id" : 7286, "title" : "", "small" : "img/small/DSC_7286.png", "medium" : "img/medium/DSC_7286.jpg", "big" : "img/big/DSC_7286.jpg" }, \
    { "id" : 7288, "title" : "", "small" : "img/small/DSC_7288.png", "medium" : "img/medium/DSC_7288.jpg", "big" : "img/big/DSC_7288.jpg" }, \
    { "id" : 7293, "title" : "", "small" : "img/small/DSC_7293.png", "medium" : "img/medium/DSC_7293.jpg", "big" : "img/big/DSC_7293.jpg" }, \
    { "id" : 7295, "title" : "", "small" : "img/small/DSC_7295.png", "medium" : "img/medium/DSC_7295.jpg", "big" : "img/big/DSC_7295.jpg" }, \
    { "id" : 7297, "title" : "", "small" : "img/small/DSC_7297.png", "medium" : "img/medium/DSC_7297.jpg", "big" : "img/big/DSC_7297.jpg" }, \
    { "id" : 7299, "title" : "", "small" : "img/small/DSC_7299.png", "medium" : "img/medium/DSC_7299.jpg", "big" : "img/big/DSC_7299.jpg" }, \
    { "id" : 7306, "title" : "", "small" : "img/small/DSC_7306.png", "medium" : "img/medium/DSC_7306.jpg", "big" : "img/big/DSC_7306.jpg" }, \
    { "id" : 7307, "title" : "", "small" : "img/small/DSC_7307.png", "medium" : "img/medium/DSC_7307.jpg", "big" : "img/big/DSC_7307.jpg" }, \
    { "id" : 7309, "title" : "", "small" : "img/small/DSC_7309.png", "medium" : "img/medium/DSC_7309.jpg", "big" : "img/big/DSC_7309.jpg" }, \
    { "id" : 7312, "title" : "", "small" : "img/small/DSC_7312.png", "medium" : "img/medium/DSC_7312.jpg", "big" : "img/big/DSC_7312.jpg" }, \
    { "id" : 7332, "title" : "", "small" : "img/small/DSC_7332.png", "medium" : "img/medium/DSC_7332.jpg", "big" : "img/big/DSC_7332.jpg" }, \
    { "id" : 7342, "title" : "", "small" : "img/small/DSC_7342.png", "medium" : "img/medium/DSC_7342.jpg", "big" : "img/big/DSC_7342.jpg" }, \
    { "id" : 7343, "title" : "", "small" : "img/small/DSC_7343.png", "medium" : "img/medium/DSC_7343.jpg", "big" : "img/big/DSC_7343.jpg" }, \
    { "id" : 7344, "title" : "", "small" : "img/small/DSC_7344.png", "medium" : "img/medium/DSC_7344.jpg", "big" : "img/big/DSC_7344.jpg" }, \
    { "id" : 7346, "title" : "", "small" : "img/small/DSC_7346.png", "medium" : "img/medium/DSC_7346.jpg", "big" : "img/big/DSC_7346.jpg" }, \
    { "id" : 7349, "title" : "", "small" : "img/small/DSC_7349.png", "medium" : "img/medium/DSC_7349.jpg", "big" : "img/big/DSC_7349.jpg" }, \
    { "id" : 7358, "title" : "", "small" : "img/small/DSC_7358.png", "medium" : "img/medium/DSC_7358.jpg", "big" : "img/big/DSC_7358.jpg" }, \
    { "id" : 7369, "title" : "", "small" : "img/small/DSC_7369.png", "medium" : "img/medium/DSC_7369.jpg", "big" : "img/big/DSC_7369.jpg" }, \
    { "id" : 7376, "title" : "", "small" : "img/small/DSC_7376.png", "medium" : "img/medium/DSC_7376.jpg", "big" : "img/big/DSC_7376.jpg" }, \
    { "id" : 7379, "title" : "", "small" : "img/small/DSC_7379.png", "medium" : "img/medium/DSC_7379.jpg", "big" : "img/big/DSC_7379.jpg" }, \
    { "id" : 7381, "title" : "", "small" : "img/small/DSC_7381.png", "medium" : "img/medium/DSC_7381.jpg", "big" : "img/big/DSC_7381.jpg" }, \
    { "id" : 7382, "title" : "", "small" : "img/small/DSC_7382.png", "medium" : "img/medium/DSC_7382.jpg", "big" : "img/big/DSC_7382.jpg" }, \
    { "id" : 7387, "title" : "", "small" : "img/small/DSC_7387.png", "medium" : "img/medium/DSC_7387.jpg", "big" : "img/big/DSC_7387.jpg" }, \
    { "id" : 7392, "title" : "", "small" : "img/small/DSC_7392.png", "medium" : "img/medium/DSC_7392.jpg", "big" : "img/big/DSC_7392.jpg" }, \
    { "id" : 7422, "title" : "", "small" : "img/small/DSC_7422.png", "medium" : "img/medium/DSC_7422.jpg", "big" : "img/big/DSC_7422.jpg" }, \
    { "id" : 7456, "title" : "", "small" : "img/small/DSC_7456.png", "medium" : "img/medium/DSC_7456.jpg", "big" : "img/big/DSC_7456.jpg" }, \
    { "id" : 7468, "title" : "", "small" : "img/small/DSC_7468.png", "medium" : "img/medium/DSC_7468.jpg", "big" : "img/big/DSC_7468.jpg" }, \
    { "id" : 7474, "title" : "", "small" : "img/small/DSC_7474.png", "medium" : "img/medium/DSC_7474.jpg", "big" : "img/big/DSC_7474.jpg" }, \
    { "id" : 7480, "title" : "", "small" : "img/small/DSC_7480.png", "medium" : "img/medium/DSC_7480.jpg", "big" : "img/big/DSC_7480.jpg" }, \
    { "id" : 7485, "title" : "", "small" : "img/small/DSC_7485.png", "medium" : "img/medium/DSC_7485.jpg", "big" : "img/big/DSC_7485.jpg" }, \
    { "id" : 7496, "title" : "", "small" : "img/small/DSC_7496.png", "medium" : "img/medium/DSC_7496.jpg", "big" : "img/big/DSC_7496.jpg" }, \
    { "id" : 7502, "title" : "", "small" : "img/small/DSC_7502.png", "medium" : "img/medium/DSC_7502.jpg", "big" : "img/big/DSC_7502.jpg" }, \
    { "id" : 7503, "title" : "", "small" : "img/small/DSC_7503.png", "medium" : "img/medium/DSC_7503.jpg", "big" : "img/big/DSC_7503.jpg" }, \
    { "id" : 7510, "title" : "", "small" : "img/small/DSC_7510.png", "medium" : "img/medium/DSC_7510.jpg", "big" : "img/big/DSC_7510.jpg" }, \
    { "id" : 7511, "title" : "", "small" : "img/small/DSC_7511.png", "medium" : "img/medium/DSC_7511.jpg", "big" : "img/big/DSC_7511.jpg" }, \
    { "id" : 7523, "title" : "", "small" : "img/small/DSC_7523.png", "medium" : "img/medium/DSC_7523.jpg", "big" : "img/big/DSC_7523.jpg" }, \
    { "id" : 7529, "title" : "", "small" : "img/small/DSC_7529.png", "medium" : "img/medium/DSC_7529.jpg", "big" : "img/big/DSC_7529.jpg" }, \
    { "id" : 7530, "title" : "", "small" : "img/small/DSC_7530.png", "medium" : "img/medium/DSC_7530.jpg", "big" : "img/big/DSC_7530.jpg" }, \
    { "id" : 7538, "title" : "", "small" : "img/small/DSC_7538.png", "medium" : "img/medium/DSC_7538.jpg", "big" : "img/big/DSC_7538.jpg" }, \
    { "id" : 7546, "title" : "", "small" : "img/small/DSC_7546.png", "medium" : "img/medium/DSC_7546.jpg", "big" : "img/big/DSC_7546.jpg" }, \
    { "id" : 7550, "title" : "", "small" : "img/small/DSC_7550.png", "medium" : "img/medium/DSC_7550.jpg", "big" : "img/big/DSC_7550.jpg" }, \
    { "id" : 7554, "title" : "", "small" : "img/small/DSC_7554.png", "medium" : "img/medium/DSC_7554.jpg", "big" : "img/big/DSC_7554.jpg" }, \
    { "id" : 7560, "title" : "", "small" : "img/small/DSC_7560.png", "medium" : "img/medium/DSC_7560.jpg", "big" : "img/big/DSC_7560.jpg" }, \
    { "id" : 7562, "title" : "", "small" : "img/small/DSC_7562.png", "medium" : "img/medium/DSC_7562.jpg", "big" : "img/big/DSC_7562.jpg" }, \
    { "id" : 7573, "title" : "", "small" : "img/small/DSC_7573.png", "medium" : "img/medium/DSC_7573.jpg", "big" : "img/big/DSC_7573.jpg" }, \
    { "id" : 7578, "title" : "", "small" : "img/small/DSC_7578.png", "medium" : "img/medium/DSC_7578.jpg", "big" : "img/big/DSC_7578.jpg" }, \
    { "id" : 7581, "title" : "", "small" : "img/small/DSC_7581.png", "medium" : "img/medium/DSC_7581.jpg", "big" : "img/big/DSC_7581.jpg" }, \
    { "id" : 7585, "title" : "", "small" : "img/small/DSC_7585.png", "medium" : "img/medium/DSC_7585.jpg", "big" : "img/big/DSC_7585.jpg" }, \
    { "id" : 7589, "title" : "", "small" : "img/small/DSC_7589.png", "medium" : "img/medium/DSC_7589.jpg", "big" : "img/big/DSC_7589.jpg" }, \
    { "id" : 7593, "title" : "", "small" : "img/small/DSC_7593.png", "medium" : "img/medium/DSC_7593.jpg", "big" : "img/big/DSC_7593.jpg" }, \
    { "id" : 7615, "title" : "", "small" : "img/small/DSC_7615.png", "medium" : "img/medium/DSC_7615.jpg", "big" : "img/big/DSC_7615.jpg" }, \
    { "id" : 7616, "title" : "", "small" : "img/small/DSC_7616.png", "medium" : "img/medium/DSC_7616.jpg", "big" : "img/big/DSC_7616.jpg" }, \
    { "id" : 7618, "title" : "", "small" : "img/small/DSC_7618.png", "medium" : "img/medium/DSC_7618.jpg", "big" : "img/big/DSC_7618.jpg" }, \
    { "id" : 7621, "title" : "", "small" : "img/small/DSC_7621.png", "medium" : "img/medium/DSC_7621.jpg", "big" : "img/big/DSC_7621.jpg" }, \
    { "id" : 7625, "title" : "", "small" : "img/small/DSC_7625.png", "medium" : "img/medium/DSC_7625.jpg", "big" : "img/big/DSC_7625.jpg" }, \
    { "id" : 7629, "title" : "", "small" : "img/small/DSC_7629.png", "medium" : "img/medium/DSC_7629.jpg", "big" : "img/big/DSC_7629.jpg" }, \
    { "id" : 7639, "title" : "", "small" : "img/small/DSC_7639.png", "medium" : "img/medium/DSC_7639.jpg", "big" : "img/big/DSC_7639.jpg" }, \
    { "id" : 7643, "title" : "", "small" : "img/small/DSC_7643.png", "medium" : "img/medium/DSC_7643.jpg", "big" : "img/big/DSC_7643.jpg" }, \
    { "id" : 7647, "title" : "", "small" : "img/small/DSC_7647.png", "medium" : "img/medium/DSC_7647.jpg", "big" : "img/big/DSC_7647.jpg" }, \
    { "id" : 7648, "title" : "", "small" : "img/small/DSC_7648.png", "medium" : "img/medium/DSC_7648.jpg", "big" : "img/big/DSC_7648.jpg" }, \
    { "id" : 7649, "title" : "", "small" : "img/small/DSC_7649.png", "medium" : "img/medium/DSC_7649.jpg", "big" : "img/big/DSC_7649.jpg" }, \
    { "id" : 7650, "title" : "", "small" : "img/small/DSC_7650.png", "medium" : "img/medium/DSC_7650.jpg", "big" : "img/big/DSC_7650.jpg" }, \
    { "id" : 7651, "title" : "", "small" : "img/small/DSC_7651.png", "medium" : "img/medium/DSC_7651.jpg", "big" : "img/big/DSC_7651.jpg" }, \
    { "id" : 7656, "title" : "", "small" : "img/small/DSC_7656.png", "medium" : "img/medium/DSC_7656.jpg", "big" : "img/big/DSC_7656.jpg" }, \
    { "id" : 7657, "title" : "", "small" : "img/small/DSC_7657.png", "medium" : "img/medium/DSC_7657.jpg", "big" : "img/big/DSC_7657.jpg" }, \
    { "id" : 7669, "title" : "", "small" : "img/small/DSC_7669.png", "medium" : "img/medium/DSC_7669.jpg", "big" : "img/big/DSC_7669.jpg" }, \
    { "id" : 7671, "title" : "", "small" : "img/small/DSC_7671.png", "medium" : "img/medium/DSC_7671.jpg", "big" : "img/big/DSC_7671.jpg" }, \
    { "id" : 7672, "title" : "", "small" : "img/small/DSC_7672.png", "medium" : "img/medium/DSC_7672.jpg", "big" : "img/big/DSC_7672.jpg" }, \
    { "id" : 7675, "title" : "", "small" : "img/small/DSC_7675.png", "medium" : "img/medium/DSC_7675.jpg", "big" : "img/big/DSC_7675.jpg" }, \
    { "id" : 7695, "title" : "", "small" : "img/small/DSC_7695.png", "medium" : "img/medium/DSC_7695.jpg", "big" : "img/big/DSC_7695.jpg" }, \
    { "id" : 7698, "title" : "", "small" : "img/small/DSC_7698.png", "medium" : "img/medium/DSC_7698.jpg", "big" : "img/big/DSC_7698.jpg" }, \
    { "id" : 7702, "title" : "", "small" : "img/small/DSC_7702.png", "medium" : "img/medium/DSC_7702.jpg", "big" : "img/big/DSC_7702.jpg" }, \
    { "id" : 7705, "title" : "", "small" : "img/small/DSC_7705.png", "medium" : "img/medium/DSC_7705.jpg", "big" : "img/big/DSC_7705.jpg" }, \
    { "id" : 7709, "title" : "", "small" : "img/small/DSC_7709.png", "medium" : "img/medium/DSC_7709.jpg", "big" : "img/big/DSC_7709.jpg" }, \
    { "id" : 7713, "title" : "", "small" : "img/small/DSC_7713.png", "medium" : "img/medium/DSC_7713.jpg", "big" : "img/big/DSC_7713.jpg" }, \
    { "id" : 7716, "title" : "", "small" : "img/small/DSC_7716.png", "medium" : "img/medium/DSC_7716.jpg", "big" : "img/big/DSC_7716.jpg" }, \
    { "id" : 7721, "title" : "", "small" : "img/small/DSC_7721.png", "medium" : "img/medium/DSC_7721.jpg", "big" : "img/big/DSC_7721.jpg" }, \
    { "id" : 7724, "title" : "", "small" : "img/small/DSC_7724.png", "medium" : "img/medium/DSC_7724.jpg", "big" : "img/big/DSC_7724.jpg" }, \
    { "id" : 7728, "title" : "", "small" : "img/small/DSC_7728.png", "medium" : "img/medium/DSC_7728.jpg", "big" : "img/big/DSC_7728.jpg" }, \
    { "id" : 7737, "title" : "", "small" : "img/small/DSC_7737.png", "medium" : "img/medium/DSC_7737.jpg", "big" : "img/big/DSC_7737.jpg" }, \
    { "id" : 7742, "title" : "", "small" : "img/small/DSC_7742.png", "medium" : "img/medium/DSC_7742.jpg", "big" : "img/big/DSC_7742.jpg" }, \
    { "id" : 7748, "title" : "", "small" : "img/small/DSC_7748.png", "medium" : "img/medium/DSC_7748.jpg", "big" : "img/big/DSC_7748.jpg" }, \
    { "id" : 7750, "title" : "", "small" : "img/small/DSC_7750.png", "medium" : "img/medium/DSC_7750.jpg", "big" : "img/big/DSC_7750.jpg" }, \
    { "id" : 7766, "title" : "", "small" : "img/small/DSC_7766.png", "medium" : "img/medium/DSC_7766.jpg", "big" : "img/big/DSC_7766.jpg" } \
  ]';

  var data = $.parseJSON(images);

  $.each( data, function( index, image) {
    $('#images').append('<li class="thumbnail"><a href="' + image.big + '"><img alt="' + image.title + '" src="' + image.small + '"></img></a></li>');
  });  
});

