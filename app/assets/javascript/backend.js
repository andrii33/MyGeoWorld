//------------------------------------------------------------------------------MAP//
var mapEngine = null;
var taxiData = [
    new google.maps.LatLng(51.502551, 31.345368),
    new google.maps.LatLng(51.502745, 31.344586),
    new google.maps.LatLng(51.502842, 31.343688),
    new google.maps.LatLng(51.502919, 31.342815),
    new google.maps.LatLng(51.502992, 31.342112),
    new google.maps.LatLng(51.505100, 31.341461),
    new google.maps.LatLng(51.503206, 31.340829),
    new google.maps.LatLng(51.503273, 31.340324),
    new google.maps.LatLng(51.503516, 31.340023),
    new google.maps.LatLng(51.503331, 31.339794),
    new google.maps.LatLng(51.503511, 31.339687),
    new google.maps.LatLng(51.503368, 31.339666),
    new google.maps.LatLng(51.503383, 31.339594),
    new google.maps.LatLng(51.503508, 31.339525),
    new google.maps.LatLng(51.503842, 31.339591),
    new google.maps.LatLng(51.504147, 31.339668),
    new google.maps.LatLng(51.504206, 31.339686),
    new google.maps.LatLng(51.504386, 31.339790),
    new google.maps.LatLng(51.504701, 31.339902),
    new google.maps.LatLng(51.504965, 31.339938),
    new google.maps.LatLng(51.505010, 31.339947),
    new google.maps.LatLng(51.505360, 31.339952),
    new google.maps.LatLng(51.503115, 31.340030),
    new google.maps.LatLng(51.506117, 31.340119),
    new google.maps.LatLng(51.506564, 31.340209),
    new google.maps.LatLng(51.506905, 31.340270),
    new google.maps.LatLng(51.506956, 31.340279),
    new google.maps.LatLng(51.550224, 31.333520),
    new google.maps.LatLng(51.550155, 31.334101),
    new google.maps.LatLng(51.550160, 31.334430),
    new google.maps.LatLng(51.550518, 31.334527),
    new google.maps.LatLng(51.550738, 31.334598),
    new google.maps.LatLng(51.550938, 31.334650),
    new google.maps.LatLng(51.551024, 31.334889),
    new google.maps.LatLng(51.550955, 31.335392),
    new google.maps.LatLng(51.550886, 31.335959),
    new google.maps.LatLng(51.550811, 31.336275),
    new google.maps.LatLng(51.550788, 31.336299),
    new google.maps.LatLng(51.550719, 31.336302),
    new google.maps.LatLng(51.550702, 31.336298),
    new google.maps.LatLng(51.550661, 31.336273),
    new google.maps.LatLng(51.550395, 31.336172),
    new google.maps.LatLng(51.550228, 31.336116),
    new google.maps.LatLng(51.550169, 31.336130),
    new google.maps.LatLng(51.550066, 31.336167),
    new google.maps.LatLng(51.504345, 31.322922),
    new google.maps.LatLng(51.504389, 31.322926),
    new google.maps.LatLng(51.504451, 31.322924),
    new google.maps.LatLng(51.504746, 31.322818),
    new google.maps.LatLng(51.505436, 31.322959),
    new google.maps.LatLng(51.506120, 31.325112),
    new google.maps.LatLng(51.506433, 31.323029),
    new google.maps.LatLng(51.506651, 31.321213),
    new google.maps.LatLng(51.506660, 31.321033),
    new google.maps.LatLng(51.506801, 31.320141),
    new google.maps.LatLng(51.506823, 31.320034),
    new google.maps.LatLng(51.506851, 31.319916),
    new google.maps.LatLng(51.507034, 31.318208),
    new google.maps.LatLng(51.507056, 31.318034),
    new google.maps.LatLng(51.507169, 31.317145),
    new google.maps.LatLng(51.507217, 31.316715),
    new google.maps.LatLng(51.506144, 31.316403),
    new google.maps.LatLng(51.505292, 31.316231),
    new google.maps.LatLng(51.500666, 31.390514),
    new google.maps.LatLng(51.500501, 31.391281),
    new google.maps.LatLng(51.500148, 31.392052),
    new google.maps.LatLng(51.500173, 31.391148),
    new google.maps.LatLng(51.500693, 31.390592),
    new google.maps.LatLng(51.501261, 31.391142),
    new google.maps.LatLng(51.501808, 31.391730),
    new google.maps.LatLng(51.502340, 31.392341),
    new google.maps.LatLng(51.502812, 31.393022),
    new google.maps.LatLng(51.503300, 31.393672),
    new google.maps.LatLng(51.503809, 31.394275),
    new google.maps.LatLng(51.504246, 31.394979),
    new google.maps.LatLng(51.504791, 31.395958),
    new google.maps.LatLng(51.505675, 31.396746),
    new google.maps.LatLng(51.506262, 31.393180),
    new google.maps.LatLng(51.506776, 31.395093),
    new google.maps.LatLng(51.507282, 31.394426),
    new google.maps.LatLng(51.507783, 31.395167),
    new google.maps.LatLng(51.508343, 31.395184),
    new google.maps.LatLng(51.508895, 31.392506),
    new google.maps.LatLng(51.509511, 31.391701),
    new google.maps.LatLng(51.509722, 31.390952),
    new google.maps.LatLng(51.590515, 31.390305),
    new google.maps.LatLng(51.590738, 31.389616),
    new google.maps.LatLng(51.529448, 31.338702),
    new google.maps.LatLng(51.529023, 31.338585),
    new google.maps.LatLng(51.528542, 31.338492),
    new google.maps.LatLng(51.528100, 31.338411),
    new google.maps.LatLng(51.527986, 31.338516),
    new google.maps.LatLng(51.527680, 31.338513),
    new google.maps.LatLng(51.527516, 31.338273),
    new google.maps.LatLng(51.527135, 31.338254),
    new google.maps.LatLng(51.526987, 31.338303),
    new google.maps.LatLng(51.526946, 31.338404),
    new google.maps.LatLng(51.526944, 31.338467),
    new google.maps.LatLng(51.526892, 31.338459),
    new google.maps.LatLng(51.526842, 31.338442),
    new google.maps.LatLng(51.526822, 31.338391),
    new google.maps.LatLng(51.526814, 31.338412),
    new google.maps.LatLng(51.526787, 31.338628),
    new google.maps.LatLng(51.526729, 31.338650),
    new google.maps.LatLng(51.526759, 31.338677),
    new google.maps.LatLng(51.526772, 31.338498),
    new google.maps.LatLng(51.526787, 31.338389),
    new google.maps.LatLng(51.526848, 31.338283),
    new google.maps.LatLng(51.526870, 31.338239),
    new google.maps.LatLng(51.527015, 31.338198),
    new google.maps.LatLng(51.527333, 31.338256),
    new google.maps.LatLng(51.527595, 31.338308),
    new google.maps.LatLng(51.527797, 31.338344),
    new google.maps.LatLng(51.528160, 31.338442),
    new google.maps.LatLng(51.528414, 31.338508),
    new google.maps.LatLng(51.528445, 31.338516),
    new google.maps.LatLng(51.528503, 31.338529),
    new google.maps.LatLng(51.528607, 31.338549),
    new google.maps.LatLng(51.528670, 31.338644),
    new google.maps.LatLng(51.528847, 31.338706),
    new google.maps.LatLng(51.529240, 31.338744),
    new google.maps.LatLng(51.529738, 31.338822),
    new google.maps.LatLng(51.500201, 31.338882),
    new google.maps.LatLng(51.500400, 31.338905),
    new google.maps.LatLng(51.500501, 31.338921),
    new google.maps.LatLng(51.500892, 31.338986),
    new google.maps.LatLng(51.501446, 31.339087),
    new google.maps.LatLng(51.501985, 31.339199),
    new google.maps.LatLng(51.502239, 31.339249),
    new google.maps.LatLng(51.502286, 31.339266),
    new google.maps.LatLng(51.597847, 31.329388),
    new google.maps.LatLng(51.597874, 31.329180),
    new google.maps.LatLng(51.597885, 31.329069),
    new google.maps.LatLng(51.597887, 31.329050),
    new google.maps.LatLng(51.597933, 31.328954),
    new google.maps.LatLng(51.598242, 31.328990),
    new google.maps.LatLng(51.598617, 31.329075),
    new google.maps.LatLng(51.598719, 31.329092),
    new google.maps.LatLng(51.598944, 31.329145),
    new google.maps.LatLng(51.599320, 31.329251),
    new google.maps.LatLng(51.599590, 31.329309),
    new google.maps.LatLng(51.599677, 31.329324),
    new google.maps.LatLng(51.599966, 31.329360),
    new google.maps.LatLng(51.550288, 31.329430),
    new google.maps.LatLng(51.550443, 31.329461),
    new google.maps.LatLng(51.550465, 31.329474),
    new google.maps.LatLng(51.550644, 31.329540),
    new google.maps.LatLng(51.550948, 31.329620),
    new google.maps.LatLng(51.551242, 31.329685),
    new google.maps.LatLng(51.551515, 31.329702),
    new google.maps.LatLng(51.551400, 31.329703),
    new google.maps.LatLng(51.551453, 31.329707),
    new google.maps.LatLng(51.551473, 31.329709),
    new google.maps.LatLng(51.551532, 31.329707),
    new google.maps.LatLng(51.551852, 31.329729),
    new google.maps.LatLng(51.552173, 31.329789),
    new google.maps.LatLng(51.552459, 31.329847),
    new google.maps.LatLng(51.552554, 31.329825),
    new google.maps.LatLng(51.552647, 31.329549),
    new google.maps.LatLng(51.552693, 31.329179),
    new google.maps.LatLng(51.552729, 31.328751),
    new google.maps.LatLng(51.496104, 31.309291),
    new google.maps.LatLng(51.496103, 31.309268),
    new google.maps.LatLng(51.496138, 31.309229),
    new google.maps.LatLng(51.496183, 31.309251),
    new google.maps.LatLng(51.496153, 31.309276),
    new google.maps.LatLng(51.496005, 31.309365),
    new google.maps.LatLng(51.495897, 31.309310),
    new google.maps.LatLng(51.493167, 31.309739),
    new google.maps.LatLng(51.495693, 31.310389),
    new google.maps.LatLng(51.495615, 31.311201),
    new google.maps.LatLng(51.495533, 31.312121),
    new google.maps.LatLng(51.495467, 31.312939),
    new google.maps.LatLng(51.495444, 31.314821),
    new google.maps.LatLng(51.495444, 31.314964),
    new google.maps.LatLng(51.495518, 31.315424),
    new google.maps.LatLng(51.493961, 31.315296),
    new google.maps.LatLng(51.495115, 31.315196),
    new google.maps.LatLng(51.492967, 31.315183),
    new google.maps.LatLng(51.492278, 31.315127),
    new google.maps.LatLng(51.491675, 31.315055),
    new google.maps.LatLng(51.490932, 31.314988),
    new google.maps.LatLng(51.559351, 31.314862),
    new google.maps.LatLng(51.525187, 31.321922),
    new google.maps.LatLng(51.523043, 31.322118),
    new google.maps.LatLng(51.523007, 31.322165),
    new google.maps.LatLng(51.522979, 31.322219),
    new google.maps.LatLng(51.522865, 31.322394),
    new google.maps.LatLng(51.522779, 31.322503),
    new google.maps.LatLng(51.522676, 31.322701),
    new google.maps.LatLng(51.522606, 31.322806),
    new google.maps.LatLng(51.522566, 31.322840),
    new google.maps.LatLng(51.522508, 31.322852),
    new google.maps.LatLng(51.522387, 31.323011),
    new google.maps.LatLng(51.522099, 31.323328),
    new google.maps.LatLng(51.521704, 31.325183),
    new google.maps.LatLng(51.521481, 31.324081),
    new google.maps.LatLng(51.521400, 31.324179),
    new google.maps.LatLng(51.521352, 31.324220),
    new google.maps.LatLng(51.521248, 31.324327),
    new google.maps.LatLng(51.520904, 31.324781),
    new google.maps.LatLng(51.520520, 31.325283),
    new google.maps.LatLng(51.520351, 31.325553),
    new google.maps.LatLng(51.520128, 31.325832),
    new google.maps.LatLng(51.499756, 31.326351),
    new google.maps.LatLng(51.499300, 31.326902),
    new google.maps.LatLng(51.499132, 31.327065),
    new google.maps.LatLng(51.499092, 31.327103),
    new google.maps.LatLng(51.498979, 31.327172),
    new google.maps.LatLng(51.498595, 31.327634),
    new google.maps.LatLng(51.498512, 31.327913),
    new google.maps.LatLng(51.498351, 31.327961),
    new google.maps.LatLng(51.498244, 31.328138),
    new google.maps.LatLng(51.497942, 31.328581),
    new google.maps.LatLng(51.497482, 31.329094),
    new google.maps.LatLng(51.497051, 31.329606),
    new google.maps.LatLng(51.496732, 31.329986),
    new google.maps.LatLng(51.496680, 31.330058),
    new google.maps.LatLng(51.496633, 31.330109),
    new google.maps.LatLng(51.496580, 31.330211),
    new google.maps.LatLng(51.496367, 31.330594),
    new google.maps.LatLng(51.495910, 31.351151),
    new google.maps.LatLng(51.495353, 31.351806),
    new google.maps.LatLng(51.494962, 31.332298),
    new google.maps.LatLng(51.494868, 31.332486),
    new google.maps.LatLng(51.494518, 31.332913),
    new google.maps.LatLng(51.493435, 31.334173),
    new google.maps.LatLng(51.492847, 31.334953),
    new google.maps.LatLng(51.492291, 31.335935),
    new google.maps.LatLng(51.492224, 31.336074),
    new google.maps.LatLng(51.491931, 31.336892),
    new google.maps.LatLng(51.491652, 31.338886),
    new google.maps.LatLng(51.491284, 31.339955),
    new google.maps.LatLng(51.491210, 31.340068),
    new google.maps.LatLng(51.491064, 31.340720),
    new google.maps.LatLng(51.491040, 31.341411),
    new google.maps.LatLng(51.491048, 31.342324),
    new google.maps.LatLng(51.490851, 31.345118),
    new google.maps.LatLng(51.559977, 31.344591),
    new google.maps.LatLng(51.559913, 31.344698),
    new google.maps.LatLng(51.559623, 31.345065),
    new google.maps.LatLng(51.558902, 31.345158),
    new google.maps.LatLng(51.558428, 31.344310),
    new google.maps.LatLng(51.531687, 31.343340),
    new google.maps.LatLng(51.531583, 31.343240),
    new google.maps.LatLng(51.531019, 31.342787),
    new google.maps.LatLng(51.556603, 31.342322),
    new google.maps.LatLng(51.556380, 31.341602),
    new google.maps.LatLng(51.553190, 31.341382),
    new google.maps.LatLng(51.554493, 31.342133),
    new google.maps.LatLng(51.554361, 31.342206),
    new google.maps.LatLng(51.555119, 31.342650),
    new google.maps.LatLng(51.553096, 31.342915),
    new google.maps.LatLng(51.551617, 31.343211),
    new google.maps.LatLng(51.551496, 31.343246),
    new google.maps.LatLng(51.550733, 31.343428),
    new google.maps.LatLng(51.550126, 31.343536),
    new google.maps.LatLng(51.550103, 31.345184),
    new google.maps.LatLng(51.550390, 31.344010),
    new google.maps.LatLng(51.550448, 31.344013),
    new google.maps.LatLng(51.550536, 31.344040),
    new google.maps.LatLng(51.550493, 31.344141),
    new google.maps.LatLng(51.590859, 31.302808),
    new google.maps.LatLng(51.590864, 31.302768),
    new google.maps.LatLng(51.590995, 31.302539),
    new google.maps.LatLng(51.591148, 31.302172),
    new google.maps.LatLng(51.591385, 31.301512),
    new google.maps.LatLng(51.591405, 31.300776),
    new google.maps.LatLng(51.591288, 31.300528),
    new google.maps.LatLng(51.591113, 31.300441),
    new google.maps.LatLng(51.591027, 31.300395),
    new google.maps.LatLng(51.591094, 31.300511),
    new google.maps.LatLng(51.591211, 31.300183),
    new google.maps.LatLng(51.591060, 31.399334),
    new google.maps.LatLng(51.590538, 31.398718),
    new google.maps.LatLng(51.590095, 31.398086),
    new google.maps.LatLng(51.509644, 31.397360),
    new google.maps.LatLng(51.509254, 31.396844),
    new google.maps.LatLng(51.508855, 31.396397),
    new google.maps.LatLng(51.508483, 31.395963),
    new google.maps.LatLng(51.508015, 31.395365),
    new google.maps.LatLng(51.507558, 31.394735),
    new google.maps.LatLng(51.507472, 31.394323),
    new google.maps.LatLng(51.507630, 31.394025),
    new google.maps.LatLng(51.507767, 31.393987),
    new google.maps.LatLng(51.507486, 31.394452),
    new google.maps.LatLng(51.506977, 31.395043),
    new google.maps.LatLng(51.506583, 31.395552),
    new google.maps.LatLng(51.506540, 31.395610),
    new google.maps.LatLng(51.506516, 31.395659),
    new google.maps.LatLng(51.506518, 31.393107),
    new google.maps.LatLng(51.506044, 31.395362),
    new google.maps.LatLng(51.505598, 31.394715),
    new google.maps.LatLng(51.505321, 31.394361),
    new google.maps.LatLng(51.505207, 31.394236),
    new google.maps.LatLng(51.503151, 31.394062),
    new google.maps.LatLng(51.505996, 31.393881),
    new google.maps.LatLng(51.506092, 31.393830),
    new google.maps.LatLng(51.505998, 31.393899),
    new google.maps.LatLng(51.505114, 31.394365),
    new google.maps.LatLng(51.505022, 31.394441),
    new google.maps.LatLng(51.504823, 31.394635),
    new google.maps.LatLng(51.504719, 31.394629),
    new google.maps.LatLng(51.505069, 31.394176),
    new google.maps.LatLng(51.505500, 31.393650),
    new google.maps.LatLng(51.503170, 31.393291),
    new google.maps.LatLng(51.505839, 31.395159),
    new google.maps.LatLng(51.502651, 31.300628),
    new google.maps.LatLng(51.502616, 31.300599),
    new google.maps.LatLng(51.502702, 31.300470),
    new google.maps.LatLng(51.502915, 31.300192),
    new google.maps.LatLng(51.505151, 31.399887),
    new google.maps.LatLng(51.503414, 31.399519),
    new google.maps.LatLng(51.503629, 31.399251),
    new google.maps.LatLng(51.503688, 31.399131),
    new google.maps.LatLng(51.505116, 31.399106),
    new google.maps.LatLng(51.505198, 31.399072),
    new google.maps.LatLng(51.503997, 31.399186),
    new google.maps.LatLng(51.504271, 31.399538),
    new google.maps.LatLng(51.504317, 31.399948),
    new google.maps.LatLng(51.504828, 31.300260),
    new google.maps.LatLng(51.504999, 31.300477),
    new google.maps.LatLng(51.505113, 31.300651),
    new google.maps.LatLng(51.505155, 31.300703),
    new google.maps.LatLng(51.505192, 31.300749),
    new google.maps.LatLng(51.505278, 31.300839),
    new google.maps.LatLng(51.505387, 31.300831),
    new google.maps.LatLng(51.505478, 31.300890),
    new google.maps.LatLng(51.505526, 31.301022),
    new google.maps.LatLng(51.505598, 31.301148),
    new google.maps.LatLng(51.505651, 31.301202),
    new google.maps.LatLng(51.505660, 31.301267),
    new google.maps.LatLng(51.553986, 31.326035),
    new google.maps.LatLng(51.554102, 31.325089),
    new google.maps.LatLng(51.554211, 31.324156),
    new google.maps.LatLng(51.553861, 31.323385),
    new google.maps.LatLng(51.555151, 31.323214),
    new google.maps.LatLng(51.552439, 31.323077),
    new google.maps.LatLng(51.551740, 31.322905),
    new google.maps.LatLng(51.551069, 31.322785),
    new google.maps.LatLng(51.550345, 31.322649),
    new google.maps.LatLng(51.599633, 31.322603),
    new google.maps.LatLng(51.599750, 31.321700),
    new google.maps.LatLng(51.599885, 31.320854),
    new google.maps.LatLng(51.599209, 31.320607),
    new google.maps.LatLng(51.595656, 31.300395),
    new google.maps.LatLng(51.595203, 31.300304),
    new google.maps.LatLng(51.528738, 31.315584),
    new google.maps.LatLng(51.528812, 31.315189),
    new google.maps.LatLng(51.528824, 31.315092),
    new google.maps.LatLng(51.528833, 31.314932),
    new google.maps.LatLng(51.528834, 31.314898),
    new google.maps.LatLng(51.528740, 31.314731),
    new google.maps.LatLng(51.528501, 31.314433),
    new google.maps.LatLng(51.528182, 31.314026),
    new google.maps.LatLng(51.527851, 31.313623),
    new google.maps.LatLng(51.527486, 31.315166),
    new google.maps.LatLng(51.527109, 31.312674),
    new google.maps.LatLng(51.526743, 31.312186),
    new google.maps.LatLng(51.526440, 31.311800),
    new google.maps.LatLng(51.526295, 31.311614),
    new google.maps.LatLng(51.526158, 31.311440),
    new google.maps.LatLng(51.525806, 31.310997),
    new google.maps.LatLng(51.525422, 31.310484),
    new google.maps.LatLng(51.525126, 31.310087),
    new google.maps.LatLng(51.525012, 31.309854),
    new google.maps.LatLng(51.525164, 31.309313),
    new google.maps.LatLng(51.525498, 31.309180),
    new google.maps.LatLng(51.525868, 31.308730),
    new google.maps.LatLng(51.526256, 31.308240),
    new google.maps.LatLng(51.526519, 31.307928),
    new google.maps.LatLng(51.526539, 31.307904),
    new google.maps.LatLng(51.526595, 31.307854),
    new google.maps.LatLng(51.526853, 31.307547),
    new google.maps.LatLng(51.527234, 31.307087),
    new google.maps.LatLng(51.527644, 31.306558),
    new google.maps.LatLng(51.528066, 31.306017),
    new google.maps.LatLng(51.528468, 31.305499),
    new google.maps.LatLng(51.528866, 31.304995),
    new google.maps.LatLng(51.529295, 31.304455),
    new google.maps.LatLng(51.529695, 31.303950),
    new google.maps.LatLng(51.529982, 31.303584),
    new google.maps.LatLng(51.500295, 31.303223),
    new google.maps.LatLng(51.500664, 31.302766),
    new google.maps.LatLng(51.501043, 31.302288),
    new google.maps.LatLng(51.501399, 31.301823),
    new google.maps.LatLng(51.501727, 31.301407),
    new google.maps.LatLng(51.501853, 31.301247),
    new google.maps.LatLng(51.501894, 31.301195),
    new google.maps.LatLng(51.502076, 31.300977),
    new google.maps.LatLng(51.502338, 31.300603),
    new google.maps.LatLng(51.502666, 31.300133),
    new google.maps.LatLng(51.503048, 31.399634),
    new google.maps.LatLng(51.503450, 31.399198),
    new google.maps.LatLng(51.505191, 31.398998),
    new google.maps.LatLng(51.504177, 31.398959),
    new google.maps.LatLng(51.504388, 31.398971),
    new google.maps.LatLng(51.504404, 31.399128),
    new google.maps.LatLng(51.504586, 31.399524),
    new google.maps.LatLng(51.504835, 31.399927),
    new google.maps.LatLng(51.505116, 31.300307),
    new google.maps.LatLng(51.505282, 31.300539),
    new google.maps.LatLng(51.505346, 31.300692),
    new google.maps.LatLng(51.493169, 31.307201),
    new google.maps.LatLng(51.493190, 31.307414),
    new google.maps.LatLng(51.495802, 31.307755),
    new google.maps.LatLng(51.493191, 31.308219),
    new google.maps.LatLng(51.493163, 31.308759),
    new google.maps.LatLng(51.493126, 31.309348),
    new google.maps.LatLng(51.493116, 31.309882),
    new google.maps.LatLng(51.493108, 31.310202),
    new google.maps.LatLng(51.493105, 31.310253),
    new google.maps.LatLng(51.493107, 31.310369),
    new google.maps.LatLng(51.495692, 31.310720),
    new google.maps.LatLng(51.495699, 31.311215),
    new google.maps.LatLng(51.495687, 31.311789),
    new google.maps.LatLng(51.495666, 31.312513),
    new google.maps.LatLng(51.495598, 31.312883),
    new google.maps.LatLng(51.495543, 31.313039),
    new google.maps.LatLng(51.495532, 31.315125),
    new google.maps.LatLng(51.495500, 31.313553),
    new google.maps.LatLng(51.495448, 31.314053),
    new google.maps.LatLng(51.495388, 31.314645),
    new google.maps.LatLng(51.495323, 31.315250),
    new google.maps.LatLng(51.495303, 31.315847),
    new google.maps.LatLng(51.495251, 31.316439),
    new google.maps.LatLng(51.495204, 31.317020),
    new google.maps.LatLng(51.495172, 31.317556),
    new google.maps.LatLng(51.495164, 31.318075),
    new google.maps.LatLng(51.495153, 31.318618),
    new google.maps.LatLng(51.495136, 31.319112),
    new google.maps.LatLng(51.495129, 31.319518),
    new google.maps.LatLng(51.495119, 31.319481),
    new google.maps.LatLng(51.495100, 31.319852),
    new google.maps.LatLng(51.495083, 31.320349),
    new google.maps.LatLng(51.495045, 31.320930),
    new google.maps.LatLng(51.494992, 31.321481),
    new google.maps.LatLng(51.494980, 31.321695),
    new google.maps.LatLng(51.494993, 31.321843),
    new google.maps.LatLng(51.494986, 31.322255),
    new google.maps.LatLng(51.494975, 31.322823),
    new google.maps.LatLng(51.494939, 31.323411),
    new google.maps.LatLng(51.494902, 31.324014),
    new google.maps.LatLng(51.494853, 31.324316),
    new google.maps.LatLng(51.494826, 31.324922),
    new google.maps.LatLng(51.494796, 31.325515),
    new google.maps.LatLng(51.494782, 31.325869),
    new google.maps.LatLng(51.494768, 31.326089),
    new google.maps.LatLng(51.494766, 31.326117),
    new google.maps.LatLng(51.494723, 31.326276),
    new google.maps.LatLng(51.494681, 31.326649),
    new google.maps.LatLng(51.502012, 31.304200),
    new google.maps.LatLng(51.501314, 31.304911),
    new google.maps.LatLng(51.501055, 31.305597),
    new google.maps.LatLng(51.500479, 31.306341),
    new google.maps.LatLng(51.529996, 31.306939),
    new google.maps.LatLng(51.529459, 31.307613),
    new google.maps.LatLng(51.528953, 31.308228),
    new google.maps.LatLng(51.528409, 31.308839),
    new google.maps.LatLng(51.527842, 31.309501),
    new google.maps.LatLng(51.527334, 31.310181),
    new google.maps.LatLng(51.526809, 31.310836),
    new google.maps.LatLng(51.526240, 31.311514),
    new google.maps.LatLng(51.523125, 31.312145),
    new google.maps.LatLng(51.525190, 31.312805),
    new google.maps.LatLng(51.524672, 31.313464),
    new google.maps.LatLng(51.524084, 31.314186),
    new google.maps.LatLng(51.523533, 31.313636),
    new google.maps.LatLng(51.523021, 31.313009),
    new google.maps.LatLng(51.522501, 31.312511),
    new google.maps.LatLng(51.521964, 31.311681),
    new google.maps.LatLng(51.521479, 31.311078),
    new google.maps.LatLng(51.520992, 31.310477),
    new google.maps.LatLng(51.520467, 31.309801),
    new google.maps.LatLng(51.520090, 31.308904),
    new google.maps.LatLng(51.499631, 31.308103),
    new google.maps.LatLng(51.499132, 31.307276),
    new google.maps.LatLng(51.498564, 31.306469),
    new google.maps.LatLng(51.497980, 31.303145),
    new google.maps.LatLng(51.497380, 31.305299),
    new google.maps.LatLng(51.496604, 31.305297),
    new google.maps.LatLng(51.495838, 31.305200),
    new google.maps.LatLng(51.495139, 31.305139),
    new google.maps.LatLng(51.494431, 31.305094),
    new google.maps.LatLng(51.495116, 31.305142),
    new google.maps.LatLng(51.492932, 31.305398),
    new google.maps.LatLng(51.492126, 31.305813),
    new google.maps.LatLng(51.491344, 31.306215),
    new google.maps.LatLng(51.490556, 31.306495),
    new google.maps.LatLng(51.559732, 31.306484),
    new google.maps.LatLng(51.558910, 31.306228),
    new google.maps.LatLng(51.558182, 31.305695),
    new google.maps.LatLng(51.531676, 31.305118),
    new google.maps.LatLng(51.531039, 31.304346),
    new google.maps.LatLng(51.556335, 31.305119),
    new google.maps.LatLng(51.555503, 31.303406),
    new google.maps.LatLng(51.554665, 31.303242),
    new google.maps.LatLng(51.553851, 31.305172),
    new google.maps.LatLng(51.552986, 31.305112),
    new google.maps.LatLng(51.551266, 31.303355)
];
var mapData = [];
var pieChartData = [];

function initialize() {
    try {
        var mapOptions = {
            zoom: 8,
            scrollwheel: false
        };

        mapEngine = new MapEngine('map-canvas', mapOptions);
        mapEngine.createMap();
        mapEngine.showCurrentPosition("It's your current position.");
    } catch (e) {}
}

$('#current-pos').click(function(e) {
    e.preventDefault();
    mapEngine.createMap();
    mapEngine.showCurrentPosition('Hello');
});

$('#set-marker').click(function(e) {
    e.preventDefault();
    //mapEngine.setMarker('Чернигов, Шевченка 99', 'Marker', 1, '/assets/images/marker2.png');
    mapEngine.createMap();
    mapEngine.setMarkers(mapData)
});

$('#draw-points').click(function(e) {
    e.preventDefault();
    mapEngine.createMap();
    //var mapOptions = {
    //    zoom: 12,
    //    center: new google.maps.LatLng(51.5032732, 31.337556800000016)
    //};
    //mapEngine = new MapEngine('map-canvas', mapOptions);
    //mapEngine.createMap();
    mapEngine.drawPoints(taxiData);
});

google.maps.event.addDomListener(window, 'load', initialize);

$(window).resize(function () {
    var h = $(window).height();
    var offsetTop = 90; // Calculate the top offset

    $('#map-canvas').css('height', h - offsetTop);

}).resize();
//-------------------------------------------------------------------------------END MAP-//

//--------------------------------------------------------------------------------CHART-//

google.load("visualization", "1", {packages:["corechart", "line"]});
//google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Count'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        title: 'My Daily Activities',
        is3D: true,
        height: 300
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}
/*-----------------------------------------------------------------------------END CHART*/

//---------------------------------------------------------------------------LINE-CHART-//

//google.load('visualization', '1', {packages: ['line']});

function drawLineChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Day');
    data.addColumn('number', 'Guardians of the Galaxy');
    data.addColumn('number', 'The Avengers');
    data.addColumn('number', 'Transformers: Age of Extinction');

    data.addRows([
        [1,  37.8, 80.8, 41.8],
        [2,  30.9, 69.5, 32.4],
        [3,  25.4,   57, 25.7],
        [4,  11.7, 18.8, 10.5],
        [5,  11.9, 17.6, 10.4],
        [6,   8.8, 13.6,  7.7],
        [7,   7.6, 12.3,  9.6],
        [8,  12.3, 29.2, 10.6],
        [9,  16.9, 42.9, 14.8],
        [10, 12.8, 30.9, 11.6],
        [11,  5.3,  7.9,  4.7],
        [12,  6.6,  8.4,  5.2],
        [13,  4.8,  6.3,  3.6],
        [14,  4.2,  6.2,  3.4]
    ]);

    var options = {
        chart: {
            title: 'Box Office Earnings in First Two Weeks of Opening',
            subtitle: 'in millions of dollars (USD)'
        },
        //width: 900,
        height: 300,
        axes: {
            x: {
                0: {side: 'top'}
            }
        }
    };


    var chart = new google.charts.Line(document.getElementById('line-chart'));

    chart.draw(data, options);
}
$(document).ready(function() {
    drawChart();
    drawLineChart();

    // crate map popover
    $('.js-popover').popover({
        html : true,
        title: function() {
            return $("#popover-head").html();
        },
        content: function() {
            return $("#popover-content").html();
        }
    });

    // create group
    $('.js-popover-group').popover({
        html : true,
        title: function() {
            return $("#popover-group-head").html();
        },
        content: function() {
            return $("#popover-group-content").html();
        }
    });
});
/*-----------------------------------------------------------------------END LINE-CHART*/

/*---------------------------------Show map------------------------------------------*/
$('.js-load-map').click(function() {
    var id = $(this).data('id');
    var access = $(this).data('access');
    var title = $(this).text();
    $.ajax({
        url: '/show-map',
        data: {
            id: id
        },
        success: function(data) {
            taxiData = [];
            // clear chart
            pieChartData = [];
            $('#piechart').empty();

            data = $.parseJSON(data);
            mapData = data.locations;

            if (data.groupby != undefined && data.groupby.length) {
                pieChartData.push(['Task', 'Count']);
                data.groupby.forEach(function(item, key, arr) {
                    pieChartData.push([item.key, item.val]);
                });
            }

            mapData.forEach(function(item, i, arr) {
                taxiData.push(new google.maps.LatLng(item.latitude, item.longitude));
            });
            mapEngine.createMap();
            mapEngine.setMarkers(mapData)

            var title = $('.js-title').text();
            var options = {
                title: title,
                is3D: true,
                height: 300
            };
            mapEngine.drawPipeChart('piechart', pieChartData, options);

            showCategories(id);

        }
    });
    $('.js-title').text(title);
    $('#map-id').attr('data-id', id);
    $('.js-make-public-map').hide();
    $('.js-make-private-map').hide();

    $('.js-delete-map').show();
    if (access == 'private') {
        $('.js-make-public-map').show();
    } else if (access == 'public') {
        $('.js-make-private-map').show();
    }



    return false;
});
/*-----------------------------------------------------------------------------------*/

function showCategories(id) {
    var categoryArr = [];
    $('.js-category').removeClass('active');
    $('.js-category').find('input').attr('checked', false);
    $.ajax({
        url: '/map-categories',
        dataType: 'json',
        data: {
            mapid: id
        },
        success: function(data) {
            console.log(data);
            categoryArr = $.map(data, function(el) { return el; });
            $('.js-category').each(function(i, el) {
                if (categoryArr.indexOf($(el).data('id').toString()) != -1) {
                    $(el).addClass('active');
                    $(el).find('input').attr('checked', true);
                } else {
                    $(el).addClass('neutral');
                    $(el).find('input').attr('checked', false);
                }
            });
        }
    });
}

/*-----------------------------Make public map--------------------------------------*/
$('.js-make-public-map').click(function() {
    var id = $('#map-id').attr('data-id');
    $.ajax({
        url: '/make-public-map',
        data: {
            id: id
        },
        success: function(data) {
            $('.js-make-public-map').hide();
            $('.js-make-private-map').show();
            $('a[data-id="'+ id +'"]').attr('data-access', 'public');
        }
    });
});
/*----------------------------------------------------------------------------------*/


/*-----------------------------Make private map--------------------------------------*/
$('.js-make-private-map').click(function() {
    var id = $('#map-id').attr('data-id');
    $.ajax({
        url: '/make-private-map',
        data: {
            id: id
        },
        success: function(data) {
            $('.js-make-public-map').show();
            $('.js-make-private-map').hide();
            $('a[data-id="'+ id +'"]').attr('data-access', 'private');
        }
    });
});
/*----------------------------------------------------------------------------------*/

/*------------------------------------Delete map------------------------------------*/
$('.js-delete-map').click(function() {
    var id = $('#map-id').attr('data-id');
    var r = confirm("Do you want to delete the map ?");
    if (r == true) {
        $.ajax({
            url: '/delete-map',
            data: {
                id: id
            },
            success: function(data) {
                $(this).attr('data-id', '');
                $(this).hide();
                $('a[data-id="'+id+'"]').remove();
                $('.js-title').text('You can select existing or download new map.');
                $('.js-make-public-map').hide();
                initialize();
            }
        });
    }
    return false;
});
/*----------------------------------------------------------------------------------*/

/*-------------------------------- Add / Delete category ---------------------------*/
$('.js-category').click(function() {
    var mapId = $('#map-id').attr('data-id');
    var categoryId = $(this).attr('data-id');
    var currentCategory = $(this);
    if (currentCategory.hasClass('active')) {
        $.ajax({
            url: '/delete-category',
            data: {
                mapid: mapId,
                categoryid: categoryId
            },
            success: function(data) {
                currentCategory.removeClass('active');
                currentCategory.addClass('neutral');
                currentCategory.find('input').attr('checked', false);
            }
        });
    } else if ($(this).hasClass('neutral')) {
        $.ajax({
            url: '/add-category',
            data: {
                mapid: mapId,
                categoryid: categoryId
            },
            success: function(data) {
                currentCategory.removeClass('neutral');
                currentCategory.addClass('active');
                currentCategory.find('input').attr('checked', true);
            }
        });
    }

});
/*--------------------------------------------------------------------------------*/