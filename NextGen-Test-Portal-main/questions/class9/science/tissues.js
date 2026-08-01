const QUESTION_BANK = [
  {
    "id": 1,
    "question": "What is the correct sequence of organisation in a multicellular organism, from simplest to most complex?",
    "options": [
      "Organ → Tissue → Cell → Organ system → Organism",
      "Cell → Tissue → Organ → Organ system → Organism",
      "Cell → Organ → Tissue → Organism → Organ system",
      "Tissue → Cell → Organ system → Organ → Organism"
    ],
    "answer": "B",
    "explanation": "Cells of similar structure and function group to form tissues, tissues combine to form organs, organs form organ systems, and organ systems together form an organism. The other sequences place these levels out of order and do not reflect how the body is actually built up.",
    "userAnswer": null
  },
  {
    "id": 2,
    "question": "Which statement best defines a tissue?",
    "options": [
      "Any collection of cells found in one part of the body",
      "A group of cells, similar in structure, that work together to perform a specific function",
      "A single cell capable of performing all life functions",
      "An organ made of two or more cell types"
    ],
    "answer": "B",
    "explanation": "A tissue is a group of structurally similar cells working together for a specific function, which brings about division of labour in the body. Option A is too vague since not all nearby cells form a functional tissue, option C describes a unicellular organism like amoeba, and option D actually describes an organ, not a tissue.",
    "userAnswer": null
  },
  {
    "id": 3,
    "question": "Which animal tissue is primarily responsible for movement of body parts?",
    "options": [
      "Epithelial tissue",
      "Connective tissue",
      "Muscular tissue",
      "Nervous tissue"
    ],
    "answer": "C",
    "explanation": "Muscular tissue is made of cells specialised to contract and relax, producing movement. Epithelial tissue covers and protects, connective tissue links and supports structures, and nervous tissue only transmits signals rather than generating movement itself.",
    "userAnswer": null
  },
  {
    "id": 4,
    "question": "Which plant tissue is mainly responsible for transporting water and minerals from roots to the rest of the plant?",
    "options": [
      "Phloem",
      "Xylem",
      "Parenchyma",
      "Epidermis"
    ],
    "answer": "B",
    "explanation": "Xylem is the conducting tissue that carries water and minerals upward from the roots and also gives mechanical strength to the plant. Phloem instead transports food, parenchyma mainly stores materials, and the epidermis is a protective outer layer, not a conducting tissue.",
    "userAnswer": null
  },
  {
    "id": 5,
    "question": "Which plant tissue transports the food made during photosynthesis to different parts of the plant?",
    "options": [
      "Xylem",
      "Sclerenchyma",
      "Phloem",
      "Collenchyma"
    ],
    "answer": "C",
    "explanation": "Phloem, through its sieve tubes, moves prepared food from the leaves to other parts of the plant, including storage organs and roots. Xylem transports water, while sclerenchyma and collenchyma are supporting tissues, not conducting tissues.",
    "userAnswer": null
  },
  {
    "id": 6,
    "question": "A tissue whose cells divide continuously and add new cells to the plant body is called a:",
    "options": [
      "Permanent tissue",
      "Meristematic tissue",
      "Vascular tissue",
      "Ground tissue"
    ],
    "answer": "B",
    "explanation": "Meristematic tissue consists of actively and continuously dividing cells that are responsible for growth in plants. Permanent tissue, in contrast, is made of differentiated cells that have generally lost the ability to divide, while vascular and ground tissue are broader functional groupings rather than descriptions of dividing ability.",
    "userAnswer": null
  },
  {
    "id": 7,
    "question": "What is the main function of the epidermis in a plant?",
    "options": [
      "Transporting food to the roots",
      "Providing protection against injury, water loss and microbes",
      "Increasing the girth of the stem",
      "Storing large amounts of food"
    ],
    "answer": "B",
    "explanation": "The epidermis forms the outermost protective layer of the plant body, often covered with a waxy cuticle, shielding the plant from mechanical injury, excess water loss and microbial invasion. Food transport is carried out by phloem, girth increase is due to the lateral meristem, and food storage is mainly a parenchyma function.",
    "userAnswer": null
  },
  {
    "id": 8,
    "question": "Blood and bone are both examples of which type of animal tissue?",
    "options": [
      "Epithelial tissue",
      "Muscular tissue",
      "Connective tissue",
      "Nervous tissue"
    ],
    "answer": "C",
    "explanation": "Both blood and bone are connective tissues that connect and support other tissues, differing mainly in the nature of their matrix, which is fluid in blood and rigid in bone. Epithelial tissue would instead form coverings and linings, muscular tissue would generate movement, and nervous tissue would transmit impulses.",
    "userAnswer": null
  },
  {
    "id": 9,
    "question": "How many pairs of ribs are present in the human rib cage, as described in the chapter?",
    "options": [
      "10 pairs",
      "11 pairs",
      "12 pairs",
      "14 pairs"
    ],
    "answer": "C",
    "explanation": "The human body has 12 pairs of ribs that together form the rib cage, which protects the heart and lungs while allowing expansion and contraction during breathing. The other numbers do not match the anatomical description given in the chapter.",
    "userAnswer": null
  },
  {
    "id": 10,
    "question": "Which part of a neuron receives signals from other neurons?",
    "options": [
      "Axon",
      "Cell body",
      "Dendrites",
      "Axon terminals"
    ],
    "answer": "C",
    "explanation": "Dendrites are the branch-like extensions of a neuron that receive incoming signals from other neurons. The axon carries messages away from the cell body toward the axon terminals, which then pass the message on to other cells, while the cell body houses the nucleus and controls overall cell activity.",
    "userAnswer": null
  },
  {
    "id": 11,
    "question": "In an onion-root experiment, roots in Jar A were left untouched while roots in Jar B had their tips cut off. What result would you expect, and why?",
    "options": [
      "Both jars show identical growth, since meristem is spread evenly along the whole root",
      "Roots in Jar A keep growing while roots in Jar B stop growing, because the dividing cells are concentrated at the root tip",
      "Roots in Jar B grow faster than Jar A, because cutting stimulates extra cell division everywhere",
      "Neither root grows further, because cutting damages the whole plant's meristem"
    ],
    "answer": "B",
    "explanation": "Since the apical meristem responsible for growth in length is located specifically at the root tip, removing the tip removes the actively dividing cells, so growth in Jar B stops while untouched roots in Jar A continue to elongate. The tissue is concentrated at the tip rather than spread along the whole root, so the other options misrepresent where growth actually occurs.",
    "userAnswer": null
  },
  {
    "id": 12,
    "question": "A forester counts the ring-like patterns on the cut trunk of a tree to estimate its age. Which meristematic tissue produced these rings, and what does it indicate about growth?",
    "options": [
      "Apical meristem; it indicates growth in length",
      "Intercalary meristem; it indicates regrowth after grazing",
      "Lateral meristem; it indicates growth in girth over successive years",
      "Ground tissue; it indicates food storage patterns"
    ],
    "answer": "C",
    "explanation": "Annual growth rings are produced by the lateral meristem, which forms a ring around the stem and adds new cells inside and outside, increasing the stem's diameter each year. Apical meristem governs length rather than girth, intercalary meristem is linked to regrowth after cutting rather than ring formation, and ground tissue is not a meristematic tissue at all.",
    "userAnswer": null
  },
  {
    "id": 13,
    "question": "After a lawn is mowed, the grass regrows and becomes bushy within a short time. Which tissue is mainly responsible for this regrowth?",
    "options": [
      "Apical meristem at the shoot tip",
      "Lateral meristem in the stem",
      "Intercalary meristem near the base of internodes",
      "Sclerenchyma in the leaf veins"
    ],
    "answer": "C",
    "explanation": "Grass regrows after mowing because of intercalary meristem located at the base of the internode or just above the node, which continues to divide even after the shoot tip is removed. The apical meristem at the original tip is destroyed by cutting, the lateral meristem is responsible for girth rather than regrowth, and sclerenchyma is a permanent supporting tissue incapable of division.",
    "userAnswer": null
  },
  {
    "id": 14,
    "question": "On a plant stem, new branches or leaves typically arise from a specific point. What is this point called, and what is the region between two such points called?",
    "options": [
      "Node; the region between two nodes is called the internode",
      "Internode; the region between two internodes is called the node",
      "Meristem; the region between two meristems is called the cortex",
      "Apex; the region between two apices is called the girth"
    ],
    "answer": "A",
    "explanation": "The node is the point on a stem where branches or leaves arise, and the stretch of stem between two nodes is called the internode. The other options reverse these terms or introduce terms, like cortex and girth, that do not correctly describe this specific relationship.",
    "userAnswer": null
  },
  {
    "id": 15,
    "question": "Meristematic cells are small, thin-walled, densely cytoplasmic and typically lack large vacuoles. Why is the absence of large vacuoles important for these cells?",
    "options": [
      "It allows the cells to store more starch than other cells",
      "It allows more space for rapid, continuous cell division without the constraint of a large fluid-filled space",
      "It prevents the cells from absorbing water at all",
      "It makes the cells resistant to mechanical injury"
    ],
    "answer": "B",
    "explanation": "A large central vacuole, typical of mature plant cells, takes up most of the cell's volume and is associated with cells that have stopped dividing; meristematic cells instead remain compact with dense cytoplasm, which supports frequent, rapid division. Storage of starch and resistance to injury are functions of other permanent tissues, and lacking large vacuoles does not mean the cells cannot absorb any water at all.",
    "userAnswer": null
  },
  {
    "id": 16,
    "question": "Some newly formed cells produced by a meristem lose the ability to divide and change in structure to perform specific roles like transport or storage. What is this process called?",
    "options": [
      "Totipotency",
      "Differentiation",
      "Dedifferentiation",
      "Regeneration"
    ],
    "answer": "B",
    "explanation": "Differentiation is the process by which meristematic cells become structurally and functionally specialised, giving rise to permanent tissues. Totipotency refers to a cell's ability to develop into a whole organism, dedifferentiation is the reverse process where specialised cells regain the ability to divide, and regeneration refers to regrowth of a lost part, not the cellular specialisation process itself.",
    "userAnswer": null
  },
  {
    "id": 17,
    "question": "Xylem is described as a complex permanent tissue, while sclerenchyma is described as a simple permanent tissue. What is the key structural difference between them?",
    "options": [
      "Complex tissue is made of only one cell type, while simple tissue has several cell types",
      "Complex tissue is made of more than one type of cell working together, while simple tissue is made of only one type of cell",
      "Complex tissue is always dead, while simple tissue is always living",
      "Complex tissue is found only in animals, while simple tissue is found only in plants"
    ],
    "answer": "B",
    "explanation": "Complex permanent tissues, such as xylem and phloem, are composed of more than one type of cell working together to perform a shared function, whereas simple permanent tissues like parenchyma, collenchyma and sclerenchyma consist of only a single cell type. Option A reverses this relationship, option C is incorrect because xylem contains both living xylem parenchyma and dead conducting elements, and option D is wrong since both categories apply within plant tissues only, not animals at all.",
    "userAnswer": null
  },
  {
    "id": 18,
    "question": "An aquatic plant has specialised parenchyma cells with large air spaces between them. What function does this modification most likely serve?",
    "options": [
      "It increases the plant's rigidity so it can stand upright on land",
      "It helps the plant float and exchange gases while submerged",
      "It allows the plant to conduct water more efficiently than xylem",
      "It thickens the cell walls with lignin for extra strength"
    ],
    "answer": "B",
    "explanation": "In aquatic plants, parenchyma with large intercellular air spaces forms buoyant tissue that helps the plant float and also aids in gas exchange since the surrounding water limits direct access to air. This modification does not add rigidity for standing upright, replace xylem's conducting role, or involve lignin deposition, which is instead a feature of sclerenchyma.",
    "userAnswer": null
  },
  {
    "id": 19,
    "question": "A climbing plant's tendrils can bend around a support without breaking, while a mature woody branch cannot bend in the same way. Which tissue property best explains the tendril's flexibility?",
    "options": [
      "Tendrils are made of dead sclerenchyma cells with lignified walls",
      "Tendrils contain collenchyma, whose living cells have unevenly thickened, pectin-rich corners that allow bending",
      "Tendrils lack any supporting tissue, so they simply flop freely",
      "Tendrils are made of xylem vessels, which are naturally elastic"
    ],
    "answer": "B",
    "explanation": "Collenchyma cells are living, with corners thickened by flexible pectin rather than rigid lignin, which allows structures like tendrils and young stems to bend without snapping. Sclerenchyma's lignified, dead cell walls make tissues hard and comparatively brittle rather than flexible, and tendrils are not devoid of supporting tissue nor built from xylem vessels.",
    "userAnswer": null
  },
  {
    "id": 20,
    "question": "Coconut husk and walnut shell are hard and tough. Which tissue gives them this property, and why?",
    "options": [
      "Parenchyma, because its cells store starch which hardens over time",
      "Collenchyma, because pectin deposition makes the walls rigid",
      "Sclerenchyma, because lignin deposition thickens the cell walls and most cells are dead",
      "Epidermis, because the waxy cuticle makes the surface hard"
    ],
    "answer": "C",
    "explanation": "Sclerenchyma cells have thick, lignified walls and are mostly dead at maturity, which makes tissues like coconut husk and walnut shell hard, strong and woody. Parenchyma cells are thin-walled and living, collenchyma provides flexibility rather than rigidity through pectin, and the epidermis is a thin protective layer that would not by itself account for such toughness.",
    "userAnswer": null
  },
  {
    "id": 21,
    "question": "Xylem is described as a complex tissue containing tracheids, vessels, xylem parenchyma and xylem fibres. Which of these components remains living at maturity?",
    "options": [
      "Tracheids",
      "Vessels",
      "Xylem parenchyma",
      "Xylem fibres"
    ],
    "answer": "C",
    "explanation": "Xylem parenchyma is the only living component of xylem, while tracheids, vessels and xylem fibres are primarily sclerenchymatous, meaning their walls are thickened and the cells are dead at maturity, which suits their role in water conduction and mechanical support. This distinction explains why xylem can transport water through essentially dead conduits while still containing some living cells for other functions.",
    "userAnswer": null
  },
  {
    "id": 22,
    "question": "Sieve tube cells in phloem lack a nucleus at maturity yet remain functionally active in transporting food. How is this possible?",
    "options": [
      "Sieve tubes function completely independently and need no regulation",
      "Companion cells, which lie alongside sieve tubes, regulate their cellular functions",
      "Xylem vessels take over control of sieve tube activity",
      "Phloem fibres regulate the loading and unloading of sugars"
    ],
    "answer": "B",
    "explanation": "Sieve tube cells depend on adjacent companion cells, which are specialised living parenchyma cells that regulate the sieve tubes' cellular functions and monitor the loading and unloading of sugars. Xylem vessels are unrelated to phloem regulation, phloem fibres provide mechanical support rather than regulatory control, and sieve tubes cannot function entirely independently given their loss of a nucleus.",
    "userAnswer": null
  },
  {
    "id": 23,
    "question": "Compare a desert plant with a thick cuticle to a submerged aquatic plant with almost no cuticle. Why does this difference make sense functionally?",
    "options": [
      "A thick cuticle reduces water loss in dry conditions, while an aquatic plant surrounded by water has little need to prevent water loss",
      "A thick cuticle helps desert plants absorb more water directly through their leaves",
      "Aquatic plants need a thick cuticle to prevent them from absorbing too much water",
      "Cuticle thickness has no relation to water availability in the environment"
    ],
    "answer": "A",
    "explanation": "A thick waxy cuticle limits water loss through transpiration, which is highly advantageous in a dry desert environment but unnecessary, and potentially disadvantageous for gas exchange, in an aquatic plant that is already surrounded by water. The cuticle does not function to absorb water through leaves, and its thickness is very much related to the plant's water environment, not unrelated to it.",
    "userAnswer": null
  },
  {
    "id": 24,
    "question": "Water absorbed by roots must travel upward against gravity through xylem, which is largely made of dead cells, to reach living cells at the top of a tall tree. Which explanation best accounts for this movement?",
    "options": [
      "Dead xylem cells actively pump water upward using energy from respiration",
      "Living cells in the leaves lose water through stomata during transpiration, creating a pull that draws water up through the continuous dead xylem conduits",
      "Water rises only due to gravity acting in reverse inside narrow tubes",
      "Root pressure alone accounts for water reaching the top of very tall trees"
    ],
    "answer": "B",
    "explanation": "Transpiration from living leaf cells through stomata creates a pulling force, called transpiration pull, that draws water upward through the continuous dead, tubular xylem cells, linking living and non-living tissue in a single functional pathway. Dead cells cannot actively pump water since they lack the necessary cellular machinery, gravity would oppose rather than assist upward movement, and root pressure alone is generally insufficient to explain water transport in very tall trees.",
    "userAnswer": null
  },
  {
    "id": 25,
    "question": "Plant tissues are organised into three tissue systems. Which system is made up of xylem and phloem together?",
    "options": [
      "Dermal tissue system",
      "Ground tissue system",
      "Vascular tissue system",
      "Meristematic tissue system"
    ],
    "answer": "C",
    "explanation": "The vascular tissue system consists of the conducting tissues, xylem and phloem, which transport water, minerals and food throughout the plant. The dermal system forms the outer covering, the ground tissue system forms the plant's main body including parenchyma, collenchyma and sclerenchyma, and \"meristematic tissue system\" is not one of the three tissue systems described in the chapter.",
    "userAnswer": null
  },
  {
    "id": 26,
    "question": "The lining of blood vessels and lungs consists of a single layer of thin, flat epithelial cells, while the skin consists of many layers of tightly packed flat cells. What does this structural difference reflect?",
    "options": [
      "Both tissues perform the exact same function, so the difference is coincidental",
      "The single thin layer supports rapid diffusion of gases and liquids, while the multilayered structure provides better protection against injury and microbes",
      "The multilayered skin allows faster diffusion than the single-layered lining of blood vessels",
      "Thickness of epithelial tissue has no relationship with its function"
    ],
    "answer": "B",
    "explanation": "A single layer of thin, flat cells minimises the distance substances must travel, supporting rapid exchange in blood vessels and lungs, while multiple layers of tightly packed cells in the skin provide a tougher barrier against mechanical injury and microbial entry. The two tissue types are structurally adapted for different, not identical, functions, and a thicker multilayered structure would actually slow diffusion rather than speed it up.",
    "userAnswer": null
  },
  {
    "id": 27,
    "question": "Blood and bone are both connective tissues, yet blood is fluid and bone is rigid. What accounts for this difference?",
    "options": [
      "Blood has no matrix at all, while bone has a matrix",
      "The matrix of blood is watery and jelly-like, while the matrix of bone is hard, solid and rigid",
      "Blood cells are dead, while bone cells are alive, which explains the texture difference",
      "Bone contains no cells, only matrix, while blood contains only cells"
    ],
    "answer": "B",
    "explanation": "Both tissues have a matrix, but its composition and consistency differ: blood's matrix, plasma, is watery and soft, while bone's matrix is hardened by calcium and phosphorus compounds, making it solid and rigid. Both tissues contain living cellular components, and describing bone as having \"no cells\" or blood as having \"no matrix\" misrepresents the structure of these connective tissues.",
    "userAnswer": null
  },
  {
    "id": 28,
    "question": "A physiotherapist explains that one injury involves the tissue connecting muscle to bone, while another involves the tissue connecting bone to bone at a joint. Which pair correctly matches these tissues?",
    "options": [
      "Ligament connects muscle to bone; tendon connects bone to bone",
      "Tendon connects muscle to bone; ligament connects bone to bone",
      "Cartilage connects muscle to bone; tendon connects bone to bone",
      "Tendon and ligament both connect muscle to muscle"
    ],
    "answer": "B",
    "explanation": "Tendons are tough connective tissue bands that attach muscles to bones and transmit the force of muscle contraction to produce movement, while ligaments connect bone to bone at joints and limit excessive movement to prevent dislocation. The other pairings incorrectly swap or misassign these connective functions.",
    "userAnswer": null
  },
  {
    "id": 29,
    "question": "Cardiac muscle, skeletal muscle and smooth muscle differ in structure. Which combination correctly matches each muscle type with a key structural feature?",
    "options": [
      "Skeletal muscle: unbranched, multinucleate, striated; Smooth muscle: spindle-shaped, single nucleus, unstriated; Cardiac muscle: branched, single nucleus, faintly striated",
      "Skeletal muscle: branched, single nucleus, unstriated; Smooth muscle: unbranched, multinucleate, striated; Cardiac muscle: spindle-shaped, striated",
      "All three muscle types are multinucleate and strongly striated",
      "Smooth muscle is branched and striated, while skeletal muscle is spindle-shaped and unstriated"
    ],
    "answer": "A",
    "explanation": "Skeletal muscle fibres are unbranched, multinucleate and clearly striated, enabling strong voluntary movement; smooth muscle cells are spindle-shaped with a single nucleus and no striations, suited to slow involuntary movements like digestion; and cardiac muscle fibres are branched, have a single nucleus, and show faint striations, allowing continuous rhythmic contraction. The other options mismatch these features across the wrong muscle types.",
    "userAnswer": null
  },
  {
    "id": 30,
    "question": "The shoulder allows movement in almost every direction, the elbow bends in only one plane, and the neck allows side-to-side head rotation. Which set of joints correctly matches these movements?",
    "options": [
      "Shoulder: hinge joint; Elbow: ball and socket joint; Neck: fixed joint",
      "Shoulder: ball and socket joint; Elbow: hinge joint; Neck: pivot joint",
      "Shoulder: pivot joint; Elbow: fixed joint; Neck: ball and socket joint",
      "Shoulder: fixed joint; Elbow: pivot joint; Neck: hinge joint"
    ],
    "answer": "B",
    "explanation": "The shoulder is a ball and socket joint allowing multidirectional movement, the elbow is a hinge joint that permits movement in a single plane like a door, and the neck moves side to side through a pivot joint connecting the skull to the backbone. The remaining options incorrectly assign these joint types to the wrong body parts.",
    "userAnswer": null
  },
  {
    "id": 31,
    "question": "A gardener trims the top of a young hedge plant. Over the following weeks, the plant stops growing taller at that point but produces several new side branches lower down. What best explains this outcome?",
    "options": [
      "The lateral meristem replaces the lost apical meristem to grow new shoots in length",
      "Removing the apical meristem eliminates apical dominance, allowing intercalary or lateral buds near lower nodes to become active and branch out",
      "Cutting the stem destroys all meristematic tissue in the plant permanently",
      "The plant regenerates a completely new apical meristem at the cut surface within hours"
    ],
    "answer": "B",
    "explanation": "Once the apical meristem at the shoot tip is removed, the tissue's dominant control over vertical growth is lost, and meristematic regions at lower nodes become active, producing new branches rather than continued vertical elongation from that same tip. Lateral meristem is chiefly responsible for girth rather than replacing apical growth, cutting does not eliminate all meristematic tissue in the plant, and a functional new apical meristem does not simply regenerate at the cut surface instantly.",
    "userAnswer": null
  },
  {
    "id": 32,
    "question": "In a transverse section of a sunflower stem, tissues are arranged from the outermost layer inward in this general order: epidermis, then ground tissue containing collenchyma and parenchyma, then a ring including sclerenchyma, phloem and lateral meristem, and finally xylem at the centre. What does this arrangement best illustrate?",
    "options": [
      "Tissues in a stem are randomly distributed with no functional pattern",
      "Protective, supporting and conducting tissues are organised in a specific spatial arrangement that matches their functional roles",
      "Only one tissue type is present in a plant stem",
      "Xylem is always located on the outside of a stem, closest to the epidermis"
    ],
    "answer": "B",
    "explanation": "The layered arrangement, with epidermis outermost for protection, ground tissue providing support and storage, and vascular tissue arranged toward the centre for conduction and strength, reflects a functional organisation rather than a random distribution. Several distinct tissue types are clearly present, and xylem is positioned toward the interior of the stem rather than at the very outside next to the epidermis.",
    "userAnswer": null
  },
  {
    "id": 33,
    "question": "Root hair cells are thin, elongated projections of epidermal cells in the root. How does this structural feature specifically benefit the plant?",
    "options": [
      "It increases the surface area available for absorbing water and minerals from soil",
      "It allows the root to photosynthesise more efficiently",
      "It thickens the root's cell walls with lignin for extra strength",
      "It helps the root transport food to the shoot faster"
    ],
    "answer": "A",
    "explanation": "Root hairs are hair-like epidermal projections that greatly increase the surface area in contact with soil, improving the efficiency of water and mineral absorption. Roots are not typically photosynthetic since they usually lack chlorophyll and light exposure, root hairs are not primarily about lignin-based strength, and food transport toward the shoot is not their main role, since food generally moves the other way, from shoot to root.",
    "userAnswer": null
  },
  {
    "id": 34,
    "question": "If a terrestrial epidermis develops an unusually thick cuticle in a very dry habitat, but a fully submerged aquatic plant developed the same thick cuticle, what would be the likely disadvantage for the aquatic plant?",
    "options": [
      "It would lose water even faster than before",
      "It would restrict gas exchange with the surrounding water, since a thick cuticle is adapted to minimise water loss rather than aid gas exchange",
      "It would prevent photosynthesis entirely since chlorophyll cannot function under any cuticle",
      "It would have no effect at all, since cuticle thickness is unrelated to the surrounding environment"
    ],
    "answer": "B",
    "explanation": "A thick cuticle is an adaptation to reduce water loss in dry environments, but for a submerged plant that has no shortage of water, it would instead hinder the exchange of dissolved gases with the surrounding water, working against the plant's needs. It would not increase water loss, since that is precisely what a cuticle is built to reduce, nor would it stop photosynthesis outright, since cuticle thickness affects gas exchange rather than blocking chlorophyll's function completely.",
    "userAnswer": null
  },
  {
    "id": 35,
    "question": "If a plant's stem and leaf epidermis had no stomata at all, which combination of processes would be most directly affected?",
    "options": [
      "Only photosynthesis would stop, while gas exchange and transpiration would continue normally",
      "Gas exchange for photosynthesis and respiration, as well as transpiration and the transpiration pull that helps move water upward, would all be disrupted",
      "Only root growth would be affected, since stomata are unrelated to shoot processes",
      "The plant would grow faster since it would lose no water at all"
    ],
    "answer": "B",
    "explanation": "Since stomata are the main pores for gas exchange and also the primary sites of transpiration, their complete absence would hinder both the uptake of gases needed for photosynthesis and respiration, and the water loss that generates the transpiration pull driving water movement through xylem. Photosynthesis is not the only process affected, root growth is not directly governed by stomata, and reduced water loss would not straightforwardly translate into faster growth given the loss of gas exchange as well.",
    "userAnswer": null
  },
  {
    "id": 36,
    "question": "An elephant strips bark from a tree trunk to feed on the nutrient-rich tissue beneath it, but leaves the inner wood intact. Based on the structure of a stem, which specific function is most likely to be immediately disrupted?",
    "options": [
      "Water and mineral transport from roots to leaves, since xylem lies deep in the wood",
      "Support of the entire tree, since removing bark collapses the whole trunk instantly",
      "Transport of food from leaves to other parts of the plant, since phloem lies just beneath the bark",
      "Cell division at the root tip, since bark and root tips are directly connected"
    ],
    "answer": "C",
    "explanation": "Phloem tissue lies just beneath the bark, so debarking primarily disrupts the transport of food manufactured in the leaves to other parts of the plant, including the roots. Xylem, being deeper within the wood, is less immediately affected by surface debarking, the tree's overall structural support does not collapse instantly from bark removal alone, and root-tip cell division is not directly linked to bark removal at the trunk.",
    "userAnswer": null
  },
  {
    "id": 37,
    "question": "Consider this statement pair about epithelial tissue in the lungs: Assertion (A): Epithelium lining the lungs is well suited for rapid gas exchange. Reason (R): It consists of a single layer of thin, flat cells that offers minimal resistance to diffusion. Which option correctly evaluates this pair?",
    "options": [
      "Both A and R are true, and R correctly explains A",
      "Both A and R are true, but R does not correctly explain A",
      "A is true, but R is false",
      "A is false, but R is true"
    ],
    "answer": "A",
    "explanation": "The epithelium lining the lungs is indeed adapted for rapid gas exchange, and this is correctly explained by its structure as a single layer of thin, flat cells, which minimises the diffusion distance for gases. A thick, multilayered epithelium would instead slow diffusion, so the given reason accurately accounts for the assertion rather than being unrelated or false.",
    "userAnswer": null
  },
  {
    "id": 38,
    "question": "Consider this statement pair: Assertion (A): Cardiac muscle can contract rhythmically throughout life without becoming fatigued. Reason (R): Cardiac muscle fibres are richly supplied with mitochondria and blood, providing a continuous energy supply. Which option correctly evaluates this pair?",
    "options": [
      "Both A and R are true, and R correctly explains A",
      "Both A and R are true, but R does not correctly explain A",
      "A is true, but R is false",
      "A is false, but R is true"
    ],
    "answer": "A",
    "explanation": "Cardiac muscle does contract tirelessly and rhythmically throughout life, and this is directly explained by its abundant mitochondria and rich blood supply, which continuously provide the energy needed for uninterrupted contraction. Since both statements are accurate and logically connected, the reason correctly accounts for the assertion rather than being a coincidental but unrelated fact.",
    "userAnswer": null
  },
  {
    "id": 39,
    "question": "A student claims that connective tissue only refers to bones, since bones \"connect\" the skeleton together. Which observation best challenges this claim?",
    "options": [
      "Blood, cartilage, tendons and ligaments are also connective tissues, despite having very different consistencies from bone",
      "The claim is entirely correct, since only bone provides connections in the body",
      "Muscles are also connective tissues because they attach to bones",
      "Epithelial tissue is a type of connective tissue because it lines organs"
    ],
    "answer": "A",
    "explanation": "Connective tissue is a broader category defined by its function of connecting and supporting other tissues, and it includes blood, cartilage, tendons and ligaments in addition to bone, even though these tissues vary greatly in matrix consistency, from fluid blood to rigid bone. Muscles are classified as muscular tissue rather than connective tissue despite attaching to bones, and epithelial tissue is a separate category defined by covering and lining functions, not connection and support.",
    "userAnswer": null
  },
  {
    "id": 40,
    "question": "If the tissues beneath the bark of a tree, including phloem and the lateral meristem, are severely damaged over an extended stretch of the trunk (girdling), which long-term outcome is most likely?",
    "options": [
      "The tree will grow taller more quickly since apical meristem is unaffected",
      "The roots will eventually be starved of food since phloem transport is blocked, potentially harming the whole tree despite intact xylem",
      "The tree will immediately stop absorbing water since xylem is destroyed",
      "There will be no effect since roots can photosynthesise their own food"
    ],
    "answer": "B",
    "explanation": "Since phloem transports food from the leaves to the rest of the plant including the roots, severe damage to the phloem and lateral meristem around the trunk can cut off this supply, starving the roots over time even though xylem, and therefore water transport, may remain largely intact. Growth in height, governed by the separate apical meristem, is not directly accelerated by this damage, and roots are not typically capable of photosynthesis since they lack the necessary green pigment and light exposure.",
    "userAnswer": null
  },
  {
    "id": 41,
    "question": "Coconut husk fibres are used to make tough, fibrous mats, while parenchyma tissue would be unsuitable for the same purpose. What is the key reason for this difference?",
    "options": [
      "Parenchyma cells have thick lignified walls that make them too rigid for weaving",
      "Sclerenchyma fibres have thick, lignified, mostly dead cell walls that give strength and durability, while parenchyma is thin-walled, living and easily damaged",
      "Parenchyma cells are found only in animal tissues, not in coconut husk",
      "Sclerenchyma cells contain a large amount of water, which makes them flexible for weaving"
    ],
    "answer": "B",
    "explanation": "Sclerenchyma fibres, with their thick, lignin-reinforced, mostly dead cell walls, provide the strength, durability and toughness required for products like mats, whereas parenchyma's thin walls and living, loosely packed cells make it soft and easily damaged, unsuitable for such mechanical use. Parenchyma is not thick-walled or lignified, it is found in plants including coconut husk tissue as well as elsewhere, and sclerenchyma's strength comes from lignin deposition rather than water content.",
    "userAnswer": null
  },
  {
    "id": 42,
    "question": "A young mango sapling's stem bends in strong winds without breaking. If this flexible tissue were somehow replaced entirely by sclerenchyma, what change would you predict?",
    "options": [
      "The stem would become more flexible and bend even further without damage",
      "The stem would become rigid and hard, making it more likely to snap under the same wind force rather than bend",
      "There would be no noticeable change in the stem's mechanical behaviour",
      "The stem would start growing faster in length"
    ],
    "answer": "B",
    "explanation": "The sapling's flexibility comes from collenchyma, whose living cells with pectin-thickened corners allow bending without breaking; replacing this with sclerenchyma, which has rigid, lignified walls in mostly dead cells, would make the stem harder but more brittle, increasing the risk of snapping rather than bending under wind stress. This substitution would not increase flexibility or growth rate, since sclerenchyma is fundamentally a rigid, non-elastic supporting tissue.",
    "userAnswer": null
  },
  {
    "id": 43,
    "question": "Two types of sugarcane cuttings were planted: type A failed to sprout, while type B successfully grew into new plants. Type B cuttings included a node, while type A cuttings were taken only from the middle of an internode. What best explains this result?",
    "options": [
      "Type A failed because internode tissue is toxic to new growth",
      "Type B succeeded because nodes contain meristematic tissue capable of giving rise to new shoots and roots, which the internode-only type A cuttings lacked",
      "Type A and type B should behave identically since all stem tissue is equally capable of regeneration",
      "Type B succeeded only because it was planted in better soil, unrelated to tissue type"
    ],
    "answer": "B",
    "explanation": "Nodes contain meristematic tissue capable of resuming active division to regenerate new shoots and roots, so cuttings that include a node, as in type B, can sprout into new plants, while cuttings taken purely from internode tissue, as in type A, lack this dividing tissue and fail to regenerate. Internode tissue is not described as toxic, not all stem tissue has equal regenerative capacity, and the outcome described is best explained by the presence or absence of meristematic tissue at the node rather than by unstated soil differences.",
    "userAnswer": null
  },
  {
    "id": 44,
    "question": "In F. C. Steward's totipotency experiment, carrot phloem cell fragments grown in a liquid nutrient medium with both light and air showed a 20% increase in fresh weight, while cells grown in a solid medium without air, or in liquid medium without light, both showed reduced growth. What does this best suggest about the cultured cells' requirements?",
    "options": [
      "The cells needed darkness and a solid medium to grow best",
      "Optimal growth of the dedifferentiated cells required a combination of adequate aeration, light and a liquid medium that allowed free access to nutrients",
      "Light and air had no measurable effect on the growth of these cells",
      "Only the composition of the nutrient medium mattered, regardless of light or air"
    ],
    "answer": "B",
    "explanation": "Since the highest growth occurred only when light, air and a liquid medium were all present together, while removing either air or light reduced growth even with nutrients present, this suggests the dedifferentiated cells required a favourable combination of aeration, illumination and unrestricted access to a liquid nutrient medium to grow optimally. The data directly contradicts the idea that darkness and a solid medium were optimal, that light and air had no effect, or that nutrient composition alone determined the outcome, since growth clearly varied with changes in light and air even when nutrients were supplied.",
    "userAnswer": null
  },
  {
    "id": 45,
    "question": "The knee joint allows bending in one direction, is cushioned between bone ends, and is stabilised so it does not move beyond a safe range. Which combination of structures is responsible for these three features respectively?",
    "options": [
      "Hinge joint for bending; cartilage for cushioning; ligaments for limiting movement",
      "Ball and socket joint for bending; tendon for cushioning; bone for limiting movement",
      "Pivot joint for bending; ligament for cushioning; cartilage for limiting movement",
      "Fixed joint for bending; muscle for cushioning; tendon for limiting movement"
    ],
    "answer": "A",
    "explanation": "The knee is a hinge joint that permits movement mainly in one plane, cartilage between the bone ends absorbs shock and cushions the joint, and ligaments connect bone to bone while restricting movement beyond a safe range to prevent dislocation. The other combinations misassign these three distinct roles to structures that do not perform them, such as attributing cushioning to a tendon or bending to a ball and socket joint, which the knee is not.",
    "userAnswer": null
  },
  {
    "id": 46,
    "question": "A person performs a straight-leg jump, keeping knees and ankles stiff, and then a normal jump, bending knees and ankles naturally on landing. Based on joint and cartilage function, why is the normal jump generally considered safer for the joints?",
    "options": [
      "Because keeping joints stiff increases the cartilage's cushioning effect",
      "Because bending at hinge joints allows cartilage and surrounding muscles to absorb the impact force gradually, reducing stress transmitted through the bones",
      "Because a stiff landing spreads the force more evenly across the whole skeleton",
      "Because bending the knees removes the need for any cartilage cushioning at all"
    ],
    "answer": "B",
    "explanation": "Bending at the knee and ankle hinge joints during a normal jump allows the cartilage cushioning the joint, along with surrounding muscles, to gradually absorb and dissipate the impact force, reducing sudden stress on the bones, whereas a stiff-legged landing transmits force more abruptly through the skeleton. Stiffening the joints does not enhance cartilage's cushioning role, and cartilage's shock-absorbing function remains relevant regardless of landing style, contrary to the claim that bending removes the need for it.",
    "userAnswer": null
  },
  {
    "id": 47,
    "question": "Data for a teak tree shows that as age in years increases (5, 10, 20, 25, 30, 40), the diameter at breast height in centimetres increases in a closely matching pattern (4, 8, 24, 28, 32, 40), alongside a similarly increasing number of annual rings. What relationship does this data best support?",
    "options": [
      "Tree age, stem diameter and number of annual rings are all unrelated to one another",
      "Stem diameter and the number of annual rings increase together with age, consistent with each ring representing roughly one year of lateral meristem activity",
      "Diameter decreases as the tree gets older, while annual rings stay constant",
      "Annual rings form only after a tree reaches full maturity, unrelated to age"
    ],
    "answer": "B",
    "explanation": "The data shows that as the tree's age increases, both its stem diameter and the number of annual rings increase together in a closely tracking pattern, supporting the idea that the lateral meristem adds roughly one ring of growth per year, which can be used to estimate a tree's age. This directly contradicts any claim that these variables are unrelated, that diameter decreases with age, or that rings only begin forming after full maturity, since the youngest tree in the data already shows both rings and measurable diameter.",
    "userAnswer": null
  },
  {
    "id": 48,
    "question": "Vibha claims that meristematic cells are found only at the root and shoot apices. Which question would best help her friend Neha test whether this claim is accurate?",
    "options": [
      "\"What colour are root tip cells under a microscope?\"",
      "\"How do plants like grasses regrow after their tips are cut off or grazed, and stems increase in girth over time?\"",
      "\"What is the boiling point of water used in the onion root experiment?\"",
      "\"Why do leaves change colour in autumn?\""
    ],
    "answer": "B",
    "explanation": "Asking how grasses regrow after their tips are removed, or how stems thicken over time, directly probes for evidence of intercalary and lateral meristems located away from the root and shoot apices, which would show that Vibha's claim is too narrow. The other questions concern unrelated topics, such as cell colour, water's boiling point, or seasonal leaf colour change, and would not help test the specific claim about the location of meristematic tissue.",
    "userAnswer": null
  },
  {
    "id": 49,
    "question": "Consider this statement pair: Assertion (A): Tendons connect bone to bone and stabilise joints, preventing excessive movement. Reason (R): Tendons are tough bands of connective tissue that transmit the force generated by muscle contraction to bone. Which option correctly evaluates this pair?",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is false, but R is true",
      "Both A and R are false"
    ],
    "answer": "C",
    "explanation": "The assertion is false because tendons actually connect muscle to bone, not bone to bone; the structure that connects bone to bone and limits excessive joint movement is a ligament. However, the reason is true on its own, since tendons are indeed tough connective tissue bands that transmit the force of muscle contraction to bone, which is precisely why they do not match the incorrect assertion about connecting bone to bone.",
    "userAnswer": null
  },
  {
    "id": 50,
    "question": "Unlike animals, which can generally grow throughout their bodies in a more distributed way, plants grow specifically from apical, lateral and intercalary meristems located at defined zones. Which explanation best accounts for this difference?",
    "options": [
      "Plants are simpler organisms and therefore need less controlled growth than animals",
      "Because plants are generally fixed in place and have rigid, cell-wall-bound cells that cannot change shape or migrate, growth must occur at specific dividing zones that add new cells to lengthen, thicken or regenerate the body",
      "Animals do not grow at all after birth, so no comparison is meaningful",
      "Meristems exist in plants purely by chance, with no functional relationship to the plant's fixed lifestyle"
    ],
    "answer": "B",
    "explanation": "Since plant cells are enclosed by a rigid cell wall and plants are typically fixed in place, growth cannot occur through cell migration or widespread shape change as it can, to some extent, in animals; instead, plants rely on localised meristematic zones at root and shoot tips, along the stem's circumference, and at nodes to add new cells for length, girth and regeneration. This is not because plants are simply \"simpler,\" animals do continue various forms of growth and tissue renewal after birth, and the location of meristems is functionally tied to the plant's sessile, cell-wall-bound nature rather than being coincidental.",
    "userAnswer": null
  },
  {
    "id": 51,
    "question": "As a young stem ages, some cells below the epidermis regain the ability to divide, forming a cork cambium that produces dead, compactly arranged cork cells impermeable to water and gases. Which concept does this best illustrate?",
    "options": [
      "A permanent tissue spontaneously reverting to a meristematic-like state to form a new protective covering as the epidermis becomes inadequate",
      "The original epidermis simply thickens over time without any new tissue forming",
      "Cork cells are meristematic cells that continue to divide indefinitely within the bark",
      "Cork formation occurs only in roots and never in aerial stems"
    ],
    "answer": "A",
    "explanation": "Cells beneath the ageing stem's epidermis take on lateral meristematic activity to form cork cambium, whose division gives rise to dead, impermeable cork cells that eventually replace the single-layered epidermis as the plant's outer protective covering, or bark. This is not simple thickening of the original epidermis, cork cells themselves are dead and non-dividing once formed, and this process occurs in aerial stems as the plant matures, not exclusively in roots.",
    "userAnswer": null
  },
  {
    "id": 52,
    "question": "If a plant's companion cells were selectively destroyed while the adjacent sieve tubes remained physically intact, what would you predict?",
    "options": [
      "Sieve tubes would function completely normally, since they operate independently of companion cells",
      "Sieve tube function would be disrupted, since companion cells regulate loading and unloading of sugars into sieve tubes that themselves lack a full complement of cellular machinery",
      "Xylem transport of water would immediately stop as a result",
      "The plant would increase its rate of photosynthesis to compensate"
    ],
    "answer": "B",
    "explanation": "Since sieve tube cells lose much of their internal cellular machinery at maturity and depend on adjacent companion cells to regulate the loading and unloading of sugars, destroying companion cells would be expected to impair phloem transport even though the sieve tubes remain structurally present. Xylem is a separate, structurally independent tissue and would not be directly affected, and there is no mechanism by which photosynthesis would increase to compensate for a phloem-loading problem.",
    "userAnswer": null
  },
  {
    "id": 53,
    "question": "Within xylem, tracheids and vessels are tubular, thick-walled and largely dead, xylem fibres are also sclerenchymatous, while xylem parenchyma remains living. How do these components together allow xylem to perform its combined roles?",
    "options": [
      "All xylem cells are living, allowing active transport of water using cellular energy",
      "The dead, thick-walled tracheids, vessels and fibres form rigid, low-resistance conduits that both transport water and provide mechanical strength, while the living xylem parenchyma carries out storage and other metabolic functions",
      "Only xylem parenchyma conducts water, while all other components merely provide colour to the wood",
      "Xylem fibres are responsible for photosynthesis within the stem"
    ],
    "answer": "B",
    "explanation": "The combination of dead, thick-walled tracheids, vessels and fibres creates strong, essentially open conduits well suited to passively conducting water under tension while also reinforcing the stem, whereas the living xylem parenchyma cells retain metabolic functions such as storage. Not all xylem cells are living, so active pumping is not how water is transported, water conduction occurs mainly through tracheids and vessels rather than xylem parenchyma alone, and xylem fibres are structural, not photosynthetic, tissue.",
    "userAnswer": null
  },
  {
    "id": 54,
    "question": "Suppose a mutant plant fails to deposit lignin in cells that would normally become sclerenchyma. What effect would this most likely have on the resulting tissue?",
    "options": [
      "The tissue would become even harder and more rigid than normal sclerenchyma",
      "The cells would likely remain living and comparatively flexible, more closely resembling collenchyma than typical hard, dead sclerenchyma",
      "The cells would immediately die regardless of lignin presence, with no change in rigidity",
      "The plant would be unable to form any epidermis at all"
    ],
    "answer": "B",
    "explanation": "Since lignin deposition is what thickens sclerenchyma cell walls and typically leads to cell death, producing hardness and rigidity, the absence of lignin would likely leave the cells thinner-walled, still living, and comparatively flexible, more similar in behaviour to collenchyma than to normal sclerenchyma. This is essentially the opposite of increased hardness, the cells would not necessarily die simply because lignin is absent, and this localised change would not by itself prevent epidermis formation, which is a separate protective tissue.",
    "userAnswer": null
  },
  {
    "id": 55,
    "question": "Gently pressing and folding an earlobe or the tip of the nose causes it to bend, and it springs back to its original shape once released. Which property of the underlying tissue best explains this behaviour?",
    "options": [
      "The soft, jelly-like, flexible matrix of cartilage allows temporary deformation while retaining enough elasticity to recover its original shape",
      "The rigid, mineral-rich matrix of bone allows temporary bending and recovery",
      "Blood plasma beneath the skin causes the springy recoil effect",
      "Sclerenchyma tissue in the ear and nose provides this flexibility and recoil"
    ],
    "answer": "A",
    "explanation": "Cartilage has a soft, jelly-like matrix that provides flexibility, allowing structures like the ear and nose to bend under gentle pressure while still holding enough structural integrity to spring back to their original shape once released. Bone's rigid, mineral-hardened matrix does not bend this way, blood is a fluid connective tissue unrelated to this shape-retaining recoil, and sclerenchyma is a plant tissue, not present in animal ears or noses at all.",
    "userAnswer": null
  },
  {
    "id": 56,
    "question": "If you were to rank blood, cartilage and bone from softest to hardest matrix consistency, which order is correct, and what single feature of the matrix accounts for this progression?",
    "options": [
      "Bone, cartilage, blood; the progression is caused by increasing water content",
      "Blood, cartilage, bone; the progression reflects increasing mineralisation and rigidity of the matrix from watery, to jelly-like, to hard and mineral-rich",
      "Cartilage, blood, bone; the progression depends only on cell number, not matrix composition",
      "All three tissues have matrices of identical hardness, differing only in cell shape"
    ],
    "answer": "B",
    "explanation": "The correct softest-to-hardest order is blood, cartilage, then bone, which reflects a progression from a watery, fluid plasma matrix, to a soft, jelly-like cartilage matrix, to a hard, rigid matrix hardened by calcium and phosphorus compounds in bone. This progression is driven by increasing matrix mineralisation and rigidity, not by increasing water content, and matrix hardness, not cell number alone, is what fundamentally distinguishes these three connective tissues.",
    "userAnswer": null
  },
  {
    "id": 57,
    "question": "The ribs are joined to the sternum and spine by flexible cartilage, allowing the rib cage to expand and contract during breathing. If this cartilage were severely injured and became rigid, what would you predict?",
    "options": [
      "Breathing would become easier since a rigid rib cage would move more efficiently",
      "The rib cage would lose the flexibility needed to expand and contract, making breathing painful and difficult by limiting the chest's volume changes",
      "Only the heart's function would be affected, with no impact on breathing",
      "The lungs would need to fully compensate by growing larger permanently"
    ],
    "answer": "B",
    "explanation": "Since the flexible cartilage joining the ribs to the sternum and spine allows the rib cage to expand and contract, generating the volume changes needed for breathing, rigid or damaged cartilage would restrict this movement, making the expansion and contraction of the chest, and therefore breathing, more difficult and potentially painful. A rigid rib cage would not improve breathing efficiency, this change would directly affect the mechanics of breathing rather than being isolated to the heart, and lungs cannot permanently grow larger to compensate for restricted rib cage movement.",
    "userAnswer": null
  },
  {
    "id": 58,
    "question": "F. C. Steward's experiment showed that a single differentiated phloem cell of carrot could dedifferentiate, divide and redifferentiate into a complete new plant. Which of the following is the most directly supported commercial application of this totipotency principle?",
    "options": [
      "Using ordinary soil to grow all crops without any specialised techniques",
      "Producing large numbers of genetically identical plants from small amounts of tissue through plant tissue culture, useful for crop improvement and propagation",
      "Directly converting animal cells into totipotent cells using the same method",
      "Eliminating the need for seeds in all types of agriculture immediately"
    ],
    "answer": "B",
    "explanation": "The demonstrated ability of a single differentiated plant cell to regenerate a whole organism underlies plant tissue culture techniques, which are used commercially to rapidly multiply genetically identical, often disease-free plants from small amounts of starting tissue, supporting crop improvement and propagation. This principle does not apply to ordinary soil-based farming without special technique, the same totipotency behaviour is not straightforwardly demonstrated in animal cells, and while tissue culture is valuable, it has not eliminated the broader role of seeds across all of agriculture.",
    "userAnswer": null
  },
  {
    "id": 59,
    "question": "The epidermis is part of the dermal tissue system, which protects the inner parts of the plant and reduces water loss. If a plant's epidermis is extensively scraped away over a large area of stem, which immediate consequence would you expect, based on the dermal tissue system's role?",
    "options": [
      "Increased water loss and greater vulnerability to microbial invasion at the damaged area, since the protective covering is compromised",
      "Immediate cessation of water transport through xylem across the entire plant",
      "A permanent halt in food transport through phloem, unrelated to the epidermis",
      "No effect at all, since the ground tissue system alone provides protection"
    ],
    "answer": "A",
    "explanation": "Since the dermal tissue system, including the epidermis, is specifically responsible for protecting inner tissues and minimising water loss, extensively removing it would be expected to increase water loss and expose the plant to microbial invasion at the damaged site. This localised damage would not immediately halt xylem transport throughout the whole plant, nor would it directly and permanently stop phloem transport, and the ground tissue system is not the tissue primarily responsible for this outer protective role.",
    "userAnswer": null
  },
  {
    "id": 60,
    "question": "Consider this statement pair: Assertion (A): Some parenchyma cells in the green parts of a plant can carry out photosynthesis in addition to storing food. Reason (R): Parenchyma cells are thin-walled, living cells that can contain chloroplasts when located in exposed, green tissue. Which option correctly evaluates this pair?",
    "options": [
      "Both A and R are true, and R correctly explains A",
      "Both A and R are true, but R does not correctly explain A",
      "A is true, but R is false",
      "A is false, but R is true"
    ],
    "answer": "A",
    "explanation": "Parenchyma is described as mainly storing food but also performing photosynthesis in the green parts of the plant, and this is consistent with parenchyma being thin-walled, living cells that, when located in green tissue exposed to light, can contain chloroplasts and thus carry out photosynthesis. Since both the assertion and reason are accurate and the reason directly accounts for why some parenchyma can photosynthesise, this option correctly reflects that relationship.",
    "userAnswer": null
  },
  {
    "id": 61,
    "question": "Consider this statement pair: Assertion (A): Intercalary meristem is present only in grasses. Reason (R): Only grass stems contain nodes and internodes where this tissue could be located. Which option correctly evaluates this pair?",
    "options": [
      "Both A and R are true, and R correctly explains A",
      "Both A and R are true, but R does not correctly explain A",
      "A is false, but R is also false, since intercalary meristem occurs at nodes in various plants, including hedges, and nodes are not unique to grasses",
      "A is true, but R is false"
    ],
    "answer": "C",
    "explanation": "The assertion is inaccurate because intercalary meristem, while especially noted for helping grasses regenerate after grazing or mowing, is also present at the nodes of other plants, such as hedges that become bushier after being cut. Nodes and internodes are a general feature of many plant stems, not something unique to grasses, so the reason offered is also false, making this the correct evaluation rather than any option that treats either statement as true.",
    "userAnswer": null
  },
  {
    "id": 62,
    "question": "A student weighing 50 kg estimates that bone mass makes up about 12-15% of total adult body weight. Using the higher end of this range, approximately how much of this student's body weight would be estimated as bone?",
    "options": [
      "About 3 kg",
      "About 6 kg",
      "About 7.5 kg",
      "About 12 kg"
    ],
    "answer": "C",
    "explanation": "Taking the higher estimate of 15% and multiplying by a 50 kg body weight gives 50 x 0.15 = 7.5 kg, which is the closest matching option. The other values correspond to using percentages, such as roughly 6%, 12% treated as a mass in kilograms directly, or an underestimate, that do not match a correct 15% calculation on a 50 kg body weight.",
    "userAnswer": null
  },
  {
    "id": 63,
    "question": "Crown gall disease causes tumour-like swellings on plant stems due to rapid, uncontrolled cell division triggered by a bacterium transferring genetic material into plant cells. How does this differ fundamentally from the normal, regulated division seen in meristematic tissue?",
    "options": [
      "There is no real difference, since both processes involve dividing plant cells",
      "Normal meristematic division is a tightly regulated process that produces organised growth and orderly differentiation into tissues, whereas crown gall division is triggered by foreign genetic material and results in unregulated, tumour-like swelling rather than organised structures",
      "Crown gall division only occurs in animal cells, never in plants",
      "Meristematic tissue cannot divide at all, unlike the cells affected by crown gall disease"
    ],
    "answer": "B",
    "explanation": "While both processes involve actively dividing plant cells, meristematic division in normal growth is tightly regulated and leads to organised, functional structures through differentiation, whereas division in crown gall disease is driven by foreign bacterial genetic material and produces disorganised, tumour-like swellings rather than orderly growth. Crown gall disease specifically affects plant cells, not animal cells, and meristematic tissue is in fact defined by its strong capacity for division, unlike the claim that it cannot divide at all.",
    "userAnswer": null
  },
  {
    "id": 64,
    "question": "In transverse sections of a dicot root and a dicot stem, xylem and phloem are arranged differently: in the root, xylem often forms a central, star-shaped core with phloem between its arms, while in the stem, xylem and phloem are typically arranged in peripheral rings or bundles around a central ground tissue. What does this difference in arrangement most likely reflect?",
    "options": [
      "Xylem and phloem are entirely different tissues in roots compared to stems",
      "The spatial arrangement of vascular tissue is related to the differing mechanical and conductive demands of roots, which anchor and resist pulling forces, versus stems, which must resist bending while supporting aerial growth",
      "Root and stem vascular tissue arrangement is identical in all plants without exception",
      "Only stems contain both xylem and phloem, while roots contain only xylem"
    ],
    "answer": "B",
    "explanation": "The differing arrangement of vascular tissue between dicot roots and stems, a central xylem core in roots versus peripheral vascular bundles in stems, reflects each organ's distinct mechanical and physiological demands, such as a root's need to resist pulling and anchor the plant, compared to a stem's need to resist bending while supporting upward growth. Xylem and phloem remain fundamentally the same conducting tissues in both organs, this arrangement is not identical across all plant types, and both roots and stems contain both xylem and phloem, not just one of the two.",
    "userAnswer": null
  },
  {
    "id": 65,
    "question": "Skeletal muscles are described as requiring instructions from nervous tissue to contract for voluntary movement. If the nerve supply to a particular skeletal muscle were completely severed, what would you predict?",
    "options": [
      "The muscle would continue to contract normally on command, since muscle tissue can function entirely independently of nerves",
      "The muscle would be unable to receive the signals needed for voluntary contraction, resulting in loss of controlled movement in that muscle",
      "The muscle would automatically convert into smooth muscle to compensate",
      "The bone attached to that muscle would immediately dissolve"
    ],
    "answer": "B",
    "explanation": "Since the chapter explains that muscles, whether voluntary or involuntary, cannot function independently and rely on instructions from nervous tissue, severing the nerve supply to a skeletal muscle would prevent it from receiving the signals required for voluntary contraction, leading to loss of controlled movement. Muscle tissue does not operate entirely independently of nervous input for voluntary movement, muscle tissue does not spontaneously convert into a different muscle type, and bone tissue is not directly dissolved by loss of nerve supply to an adjacent muscle.",
    "userAnswer": null
  },
  {
    "id": 66,
    "question": "Clenching your fist is a voluntary action, while your heart continues beating without any conscious effort. What best explains this difference in terms of tissue type and control?",
    "options": [
      "Both actions use skeletal muscle, but the heart's skeletal muscle works automatically",
      "Clenching the fist uses skeletal muscle under voluntary, conscious control, while the heartbeat is produced by cardiac muscle that contracts rhythmically and automatically without requiring conscious control",
      "The heart uses smooth muscle exclusively, identical to that found in the intestines",
      "Voluntary and involuntary movements both rely on the exact same muscle tissue type, differing only in speed"
    ],
    "answer": "B",
    "explanation": "Voluntary movements, such as clenching a fist, are carried out by skeletal muscle under conscious control, while the heartbeat is produced by cardiac muscle, a distinct tissue type found only in the heart that contracts rhythmically and automatically without needing conscious direction. The heart is not made of ordinary skeletal muscle working automatically, cardiac muscle is structurally distinct from the smooth muscle found in the intestines, and voluntary and involuntary movements are driven by different muscle tissue types, not the same tissue differing only in speed.",
    "userAnswer": null
  },
  {
    "id": 67,
    "question": "Stem cells in bone marrow can divide to produce new blood cells, and in a bone marrow transplant, healthy stem cells are given to patients with blood disorders. How does this ability compare to the totipotency demonstrated in Steward's carrot phloem experiment?",
    "options": [
      "Bone marrow stem cells are totipotent in exactly the same way as the carrot phloem cells, capable of regenerating an entire new organism",
      "Bone marrow stem cells divide to renew and replace specific blood cell types, a more limited regenerative ability than the totipotency shown by the carrot cells, which regenerated an entire new plant",
      "Bone marrow stem cells cannot divide at all, unlike carrot phloem cells",
      "There is no meaningful difference, since all dividing cells in any organism are equally totipotent"
    ],
    "answer": "B",
    "explanation": "While both examples involve cells that can divide and regenerate tissue, bone marrow stem cells are described as dividing to make new blood cells, a comparatively limited regenerative role, whereas Steward's carrot phloem cells demonstrated true totipotency by regenerating an entirely new, complete plant from a single cell. Describing bone marrow stem cells as identically totipotent overstates their described role, they are explicitly said to be able to divide, and not all dividing cells across all organisms share the same broad regenerative potential as the totipotent carrot cells.",
    "userAnswer": null
  },
  {
    "id": 68,
    "question": "Consider this statement pair: Assertion (A): The elbow's hinge joint restricts movement mainly to bending and straightening in a single plane. Reason (R): The shape of the bone ends at the hinge joint permits rotation around only one axis, unlike the rounded, cup-fitting bone ends of a ball and socket joint. Which option correctly evaluates this pair?",
    "options": [
      "Both A and R are true, and R correctly explains A",
      "Both A and R are true, but R does not correctly explain A",
      "A is true, but R is false",
      "A is false, but R is true"
    ],
    "answer": "A",
    "explanation": "The elbow's hinge joint does indeed restrict movement mainly to one plane, like a door, and this is correctly explained by the shape of the bone ends, which permits rotation around only a single axis, unlike the rounded ball fitting into a shallow socket seen at joints such as the shoulder. Since both statements are accurate and the bone-end shape directly accounts for the restricted, single-plane movement, the reason correctly explains the assertion.",
    "userAnswer": null
  },
  {
    "id": 69,
    "question": "Xylem fibres are described as sclerenchymatous and contribute to the mechanical strength of the plant, while also being classified as part of the water-conducting xylem tissue. How can a single tissue component serve both a conducting-associated and a purely mechanical role?",
    "options": [
      "Xylem fibres cannot serve both roles simultaneously, so the description must be inconsistent",
      "As dead, thick-walled cells grouped within the same complex tissue as the water-conducting tracheids and vessels, xylem fibres add rigidity and strength to the plant body even though they are not the primary route for water movement",
      "Xylem fibres are actually living cells that actively pump water while also being flexible",
      "Xylem fibres exist only in phloem, not in xylem, despite their name"
    ],
    "answer": "B",
    "explanation": "Xylem fibres, though grouped within the same complex conducting tissue as tracheids and vessels, are primarily sclerenchymatous, dead, thick-walled cells whose main contribution is mechanical strength and rigidity to the plant body, rather than being the principal pathway for water movement, which is a hydraulic support role rather than a contradiction. Xylem fibres are not living, actively pumping cells, and by name and structure, xylem fibres belong to xylem tissue, not phloem.",
    "userAnswer": null
  },
  {
    "id": 70,
    "question": "Regular yoga practice is described as improving flexibility, posture and breathing while helping keep bones strong, muscles fit and joints flexible. Which combination of tissue-level effects would best account for these described benefits?",
    "options": [
      "Yoga has no measurable effect on any tissue and works purely through mental relaxation",
      "Regular movement and controlled postures can help maintain healthy joint cartilage, support muscle tone in skeletal muscle, and promote the mechanical loading that helps keep bone tissue strong, together supporting flexibility and posture",
      "Yoga works only by strengthening nervous tissue, with no direct effect on muscles, bones or joints",
      "Yoga primarily affects epithelial tissue, which then indirectly controls posture"
    ],
    "answer": "B",
    "explanation": "Regular physical activity of the kind described in yoga can support healthy cartilage function at joints, maintain skeletal muscle tone and strength, and provide the kind of mechanical loading associated with maintaining bone strength, together contributing to the described improvements in flexibility, posture and overall musculoskeletal health. This does not mean yoga has no tissue-level effect, its benefits are not limited to nervous tissue alone while bypassing muscles, bones and joints, and epithelial tissue is not the primary tissue responsible for posture or joint flexibility.",
    "userAnswer": null
  },
  {
    "id": 71,
    "question": "Sieve tubes in phloem have perforated end walls and are living but lack a full nucleus at maturity, while xylem vessels have thick, often lignified walls, are dead, and lack living contents entirely. Which statement best captures this structural contrast and its functional significance?",
    "options": [
      "Both tissues are identical in structure and function, differing only in name",
      "Sieve tubes remain living, perforated conduits suited to actively regulated food transport with the help of companion cells, while xylem vessels are dead, rigid conduits suited to passive, one-way transport of water under tension",
      "Xylem vessels are living cells that actively transport food, while sieve tubes are dead cells that passively transport water",
      "Sieve tubes have thicker walls than xylem vessels, making them more rigid"
    ],
    "answer": "B",
    "explanation": "Sieve tubes retain living cytoplasm and are supported by companion cells that help regulate the loading and unloading of sugars, suiting them to actively assisted food transport, whereas xylem vessels are dead, thick-walled tubes well suited to passively conducting water under tension without requiring living contents. Describing these tissues as identical ignores their clear structural differences, reversing their described roles is inaccurate since xylem transports water and phloem transports food, and sieve tubes are not described as thicker-walled or more rigid than xylem vessels.",
    "userAnswer": null
  },
  {
    "id": 72,
    "question": "A tumour-like growth on a plant stem, caused by crown gall disease, and the normal thickening of a stem due to lateral meristem activity both involve increased cell numbers in the stem. What key difference distinguishes these two processes?",
    "options": [
      "There is no real difference, since both processes add new cells to the stem",
      "Lateral meristem activity is a regulated process producing organised tissue that increases girth in a controlled way, while crown gall growth is an unregulated, bacterially triggered proliferation that produces disorganised, tumour-like swelling",
      "Crown gall growth only occurs in roots, while lateral meristem activity only occurs in stems",
      "Lateral meristem activity always produces tumours, while crown gall disease never does"
    ],
    "answer": "B",
    "explanation": "Although both processes involve added cell numbers, lateral meristem activity is a normal, tightly regulated developmental process that produces organised tissue increasing stem girth in a controlled manner, whereas crown gall disease results from a bacterium disrupting normal cellular regulation, producing disorganised, tumour-like swellings rather than functional tissue. The two processes are not interchangeable in location, since crown gall disease is described as affecting stems, and it is incorrect to associate tumours with the normal lateral meristem process rather than with the disease itself.",
    "userAnswer": null
  },
  {
    "id": 73,
    "question": "Grasses, which are frequently grazed or mowed, rely heavily on intercalary meristem near the base of internodes to regrow, while tall trees, which are not typically grazed at ground level, rely mainly on apical and lateral meristems. What does this difference in reliance most likely reflect?",
    "options": [
      "Grasses lack apical meristem entirely, so they must depend only on intercalary meristem",
      "The location of meristematic tissue in different plants is linked to the kinds of disturbances or growth demands each plant commonly faces, favouring regrowth from low, protected regions in frequently grazed or mown plants",
      "Trees never experience any form of tissue damage, so they have no need for regenerative meristems",
      "Intercalary meristem is entirely absent in all woody, tree-like plants without exception"
    ],
    "answer": "B",
    "explanation": "The presence of intercalary meristem near the base of internodes in grasses, positioned to survive when the upper parts of the plant are removed by grazing or mowing, illustrates how the distribution of meristematic tissue in a species can be functionally linked to the specific growth challenges or disturbances that plant commonly encounters. Grasses are not described as lacking apical meristem altogether, trees can and do experience various forms of damage despite relying mainly on apical and lateral meristems, and the chapter does not state that intercalary meristem is entirely absent from every woody plant.",
    "userAnswer": null
  },
  {
    "id": 74,
    "question": "A researcher observes that a plant's apical meristem, lateral meristem and vascular tissue system are all functioning normally, but the plant's leaves show wilting during the day despite adequate soil moisture, and its epidermis appears to have an unusually thin cuticle. Which explanation best fits this combined observation?",
    "options": [
      "An abnormally thin cuticle would likely allow excessive water loss through transpiration, outpacing water uptake and causing wilting, even though the vascular and meristematic tissues themselves are functioning correctly",
      "The wilting must be caused entirely by a malfunctioning lateral meristem, unrelated to the cuticle",
      "Since the vascular tissue system is functioning normally, cuticle thickness cannot possibly affect the plant's water balance",
      "The apical meristem is directly responsible for regulating cuticle thickness, so this observation reflects apical meristem failure"
    ],
    "answer": "A",
    "explanation": "Since the cuticle normally limits water loss through the epidermis, an unusually thin cuticle would be expected to allow excessive transpiration, potentially causing water loss to outpace uptake through an otherwise normally functioning vascular system, resulting in wilting even when soil moisture is adequate. The lateral meristem, which governs girth, is not directly implicated by this scenario, cuticle thickness clearly does affect a plant's water balance regardless of vascular tissue function, and cuticle thickness is a property of the epidermis rather than something directly regulated by the apical meristem.",
    "userAnswer": null
  },
  {
    "id": 75,
    "question": "A student sprains their ankle while landing awkwardly from a jump, and a doctor explains that a ligament was overstretched, while the joint's cartilage and surrounding tendons remained undamaged. Based on the distinct roles of these connective tissues, which outcome would you expect?",
    "options": [
      "The joint's ability to limit excessive or abnormal movement would likely be reduced, since ligaments are chiefly responsible for connecting bone to bone and restraining the joint's range of motion, even though cushioning from cartilage and force transmission from muscle to bone via tendons remain intact",
      "The student would be completely unable to transmit any muscle force to the bone, since ligaments perform that function",
      "The joint would lose all of its shock-absorbing cushioning, since ligaments are responsible for that role",
      "There would be no functional consequence at all, since ligaments play no real role in joint stability"
    ],
    "answer": "A",
    "explanation": "Since ligaments connect bone to bone and specifically function to limit excessive movement and stabilise a joint, overstretching a ligament while leaving cartilage and tendons undamaged would primarily reduce the joint's ability to resist abnormal movement, even though force transmission from muscle to bone through tendons and shock absorption through cartilage remain unaffected. Force transmission from muscle to bone is a tendon function, not a ligament function, cartilage's cushioning role would not be affected by ligament damage alone, and given ligaments' clear role in joint stability, there would indeed be a functional consequence from this injury.",
    "userAnswer": null
  }
];
