//Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('mana')
        .gem()
        .element(GTElements.Ma)

    event.create('livingrock')
        .dust(2)
        // FIXME add second color
        .color(0xd7d7c8).iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.GENERATE_PLATE)

    event.create('livingwood')
        .wood()
        // FIXME add second color
        .color(0x34140c).iconSet(GTMaterialIconSet.WOOD)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create('dreamwood')
        .wood()
        // FIXME add second color
        .color(0xb9ddd3).iconSet(GTMaterialIconSet.WOOD)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW)

    event.create('manasteel')
        .liquid()
        // FIXME add second color
        .color(0x67b9ee).iconSet(GTMaterialIconSet.getByName('mana'))
        .components('1x gtceu:mana', '1x gtceu:redstone', '1x gtceu:electrum')
        .cableProperties(GTValues.V[GTValues.LV], 8, 0, false)
        .toolStats(ToolProperty.Builder['of(float,float,int,int)'](8, 5, 2048, 4)
            .addTypes(GTToolType.MORTAR)
            .build())
        .appendFlags(GTMaterials.EXT2_METAL, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_GEAR)
        .formula('Ma*(Si(FeS₂)₅(CrAl₂O₃)Hg₃)(AuAg)')

    event.create('elementium')
        .ingot()
        // FIXME add second color
        .color(0xf472c6).iconSet(GTMaterialIconSet.SHINY)
        .cableProperties(GTValues.V[GTValues.EV], 3, 4, false)
        .toolStats(ToolProperty.Builder['of(float,float,int,int)'](20, 8, 8072, 6)
           .addTypes(GTToolType.MORTAR)
            .build())
        .appendFlags(GTMaterials.EXT_METAL, 
            GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.NO_SMELTING)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    
    event.create('unstable_terrasteel')
        .liquid()
        .color(0x00731f).iconSet(GTMaterialIconSet.SHINY)
        .components('1x gtceu:prepared_terrasteel', '1x gtceu:potent_mana')
    event.create('raw_mana_crystal_slurry')
        .liquid()
        .color(0x32a88d).iconSet(GTMaterialIconSet.SHINY)
        .components('1x gtceu:mana', '1x gtceu:sulfuric_acid', '2x gtceu:water')
    event.create('prepared_terrasteel')
        .liquid()
        .color(0x32a861).iconSet(GTMaterialIconSet.SHINY)
        .components('2x gtceu:mana', '1x gtceu:hydrochloric_acid')
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('annealed_manasteel')
        .ingot()
        .liquid()
        .color(0xa8ddff)
        .components('1x gtceu:manasteel')
        .cableProperties(GTValues.V[GTValues.MV], 2, 3, false)
        .iconSet(GTMaterialIconSet.getByName('mana'))
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.NO_SMELTING)

    event.create('terrasteel')
        .ingot()
        // FIXME add second color
        .color(0x55f609).iconSet(GTMaterialIconSet.SHINY)
        .components('13x gtceu:mana', '1x gtceu:manasteel', '1x gtceu:hydrogen')
        // FIXME this literally doesn't exist. what's it supposed to be?
        // .element(GTElements.get('terrasteel'))
        .cableProperties(GTValues.V[GTValues.MV], 8, 1, false)
        .toolStats(ToolProperty.Builder['of(float,float,int,int)'](12, 7, 3072, 6)
            .addTypes(GTToolType.MORTAR).build())
        .appendFlags(GTMaterials.EXT_METAL, GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.NO_SMELTING)
    
    event.create('galvanized_ethersteel')
        .ingot()
        .liquid()
        // FIXME add second color
        .color(0xcf325b).iconSet(GTMaterialIconSet.SHINY)
        .components('2x gtceu:mana', '1x gtceu:stainless_steel', '1x gtceu:elementium')
        .components('Ma₂FeMnNi(Si(Fe₂S₂)₅(Cr₂ZiAbAl)Hg₃)')
        .cableProperties(GTValues.V[GTValues.HV], 4, 4, false)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR
        )
})

GTCEuStartupEvents.materialModification(event => {
    // TagPrefix.ingot.setIgnored(GTMaterials.get('terrasteel'), () => Item.getItem('botania:terrasteel_ingot'))
    // TagPrefix.ingot.setIgnored(GTMaterials.get('elementium'), () => Item.getItem('botania:elementium_ingot'))
    // TagPrefix.ingot.setIgnored(GTMaterials.get('elementium'))
    TagPrefix.dust['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('mana'), () => Item.getItem('botania:mana_dust'))
    TagPrefix.gem['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('mana'), () => Item.getItem('botania:mana_diamond'))

    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('manasteel'), () => Item.getItem('botania:manasteel_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terrasteel'), () => Item.getItem('botania:terrasteel_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('elementium'), () => Item.getItem('botania:elementium_ingot'))

})
