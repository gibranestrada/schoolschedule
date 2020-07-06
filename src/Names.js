import React from "react";

const Names = () => {
    const masterListBrothers = {
        valeriy_filipenka: {
            assignments: ["reading", "return", "bible study", "talk", "householder"],
        },
        anatoly_lesitsa: {
            assignments: ["reading"],
        },
        maksim_petrov: {
            assignments: ["reading", "return", "householder"],
        },
        gibran_estrada: {
            assignments: ["reading", "return", "talk", "householder"],
        },
        vadim_klimenko: {
            assignments: ["reading", "return", "talk"],
        },
        georgiy_pleev: {
            assignments: ["reading", "return", "householder"],
        },
        pavel_nedbailov: {
            assignments: ["reading", "initial", "return", "householder"],
        },
        timur_khodjiev: {
            assignments: ["reading", "initial", "return", "talk", "householder"],
        },
        simon_dadabaev: {
            assignments: ["reading", "return"],
        },
        aleksandr_mihailov: {
            assignments: ["reading", "return", "householder"],
        },
        akmal_davlyatov: {
            assignments: ["reading"],
        },
        petro_solyanik: {
            assignments: ["reading"],
        },
        dilovar_babahanov: {
            assignments: ["reading"],
        },
        aleksandr_agapov: {
            assignments: ["reading", "bible study", "talk"],
        },
        babajon_gurbandurdiev: {
            assignments: ["reading", "return", "talk", "householder"],
        },
        sergey_pashkevich: {
            assignments: ["reading", "initial", "return", "bible study", "talk", "householder"],
        },
        eduard_mihailov: {
            assignments: ["reading", "initial", "talk"],
        },
        akhmad_davlyatov: {
            assignments: ["reading", "householder"],
        },
        aziz_joraev: {
            assignments: ["reading"],
        },
        semion_dadabaev: {
            assignments: ["reading", "return", "bible study", "talk", "householder"],
        },
        yegor_drozdov: {
            assignments: ["reading", "talk"],
        },
        abdulla_kadirov: {
            assignments: ["reading"],
        },
        fedor_chistyakov: {
            assignments: ["reading", "return", "talk", "householder"],
        },
        kahor_otozhonov: {
            assignments: ["reading", "talk"],
        },
        alijon_davlyatov: {
            assignments: ["reading", "return", "talk"],
        },
        andrey_aksentyev: {
            assignments: []
        },
        maksim_natalia: {
            assignments: []
        },
        maks_shapovalov: {
            assignments: []
        },
        sasha_mikhailov: {
            assignments: []
        },
        kirill_stupko: {
            assignments: []
        }
    };
    const masterListSisters = {
        maria_drozdova: {
            assignments: ["initial", "return", "householder"],
        },
        stephanie_brown: {
            assignments: ["initial", "return", "householder"],
        },
        luba_ostarkhova: {
            assignments: ["initial"],
        },
        kimberly_kinlock: {
            assignments: ["initial", "return", "householder"],
        },
        ella_dadabaeva: {
            assignments: ["initial", "return", "householder"],
        },
        erkenai_joraeva: {
            assignments: ["initial", "householder"],
            exceptions: ["only 2nd school"],
        },
        olga_babak: {
            assignments: ["initial", "return", "householder"],
        },
        angela_matatova: {
            assignments: ["initial", "bible study", "householder"],
        },
        breanda_augustine: {
            assignments: ["initial"],
        },
        baktygul_saberkulova: {
            assignments: ["initial", "householder"],
        },
        natalya_nikolaeva: {
            assignments: ["initial"],
        },
        gulzhikhan_galeeva: {
            assignments: ["initial", "householder"],
        },
        verna_kinlock: {
            assignments: ["initial", "bible study", "householder"],
        },
        lena_chestyakova: {
            assignments: ["initial", "return", "bible study"],
        },
        sabina_ruvin: {
            assignments: ["initial", "householder"],
        },
        charlene_thomas: {
            assignments: ["initial", "householder"],
        },
        nadezhda_pashkevich: {
            assignments: ["initial", "householder"],
        },
        maria_petrutrik: {
            assignments: ["initial", "householder"],
        },
        natalya_konovalova: {
            assignments: ["initial", "householder"],
        },
        mavis_springer: {
            assignments: ["initial", "householder"],
        },
        larisa_mihailova: {
            assignments: ["initial", "householder"],
        },
        angelina_pesakova: {
            assignments: ["initial", "householder"],
        },
        maria_chirkova: {
            assignments: ["initial", "return"],
        },
        katya_pichugina: {
            assignments: ["initial", "bible study"],
        },
        tatyana_danielson: {
            assignments: ["initial", "return", "bible study", "householder"],
        },
        angelika_estrada: {
            assignments: ["initial",, "return", "householder"],
            exceptions: ["only 2nd school"]
        },
        jana_bennett: {
            assignments: ["initial", "return", "householder"],
        },
        erkenai_joraeva: {
            assignments: ["initial"],
        },
        irina_osadze: {
            assignments: ["initial", "bible study", "householder"],
        },
        sofia_dvornik: {
            assignments: ["initial", "return", "householder"],
        },
        brenda_augustine: {
            assignments: ["initial", "return", "householder"],
        },
        monica_kugman: {
            assignments: ["initial", "householder"],
        },
        lida_smik: {
            assignments: ["initial", "return", "householder"],
        },
        antonina_pelyo: {
            assignments: ["initial", "return", "householder"],
        },
        larisa_dvornik: {
            assignments: ["initial", "return", "householder"],
        },
        irina_timchuk: {
            assignments: ["return", "householder"]
        },
        sveta_ambartsumyan: {
            assignments: ["return", "householder"]
        },
        natalya_vidulina: {
            assignments: ["return", "householder"]
        },
        barbara_gelen: {
            assignments: ["return", "householder"]
        },
        stephanie_st_louis: {
            assignments: ["return"]
        },
        natalya_goncharova: {
            assignments: ["return"]
        },
        oksana_morris: {
            assignments: ["return", "bible study", "householder"]
        },
        ruzanna_svirskaya: {
            assignments: ["return", "bible study"]
        },
        valentina_kudravets: {
            assignments: ["return", "householder"]
        },
        glorya_bankhead: {
            assignments: ["return", "bible study", "householder"]
        },
        elena_chistyakova: {
            assignments: ["bible study", "householder"]
        },
        dilnoza_otozhonova: {
            assignments: ["bible study", "householder"]
        },
        katya_kadirova: {
            assignments: ["bible study"]
        },
        tamano_davlyatova: {
            assignments: ["householder"]
        },
        ganimat_bekmamadova: {
            assignments: ["householder"]
        },
        lena_grigoreva: {
            assignments: ["householder"]
        },
        natalia_maksim: {
            assignments: []
        },
        cristina_sulik: {
            assignments: []
        },
        kristina_rechkalova: {
            assignments: []
        },
        khidoyat_asimova: {
            assignments: []
        },
        farzona_asimova: {
            assignments: []
        },
        ruhafzo_joraev: {
            assignments: []
        },
        nisso_davlyatova: {
            assignments: []
        },
        vita_mikhailov: {
            assignments: []
        }
        //not used Virginia Gilbert, Luba Gorina, Inna Kruglaya
    };

    const randomNoRepeats = (array) => {
        var copy = array.slice(0);
        return function() {
          if (copy.length < 1) { copy = array.slice(0); }
          var index = Math.floor(Math.random() * copy.length);
          var item = copy[index];
          copy.splice(index, 1);
          return item;
        };
      }
      
      const chooser = randomNoRepeats(Object.keys(masterListBrothers));
      console.log(chooser());
      console.log(chooser());
      console.log(chooser());
      console.log(chooser());
      console.log(chooser());
      console.log(chooser());
      console.log(chooser());
      console.log(chooser());
      console.log(chooser());
      console.log(chooser());
      console.log(chooser());
      console.log(chooser());
      console.log(chooser());
      console.log(chooser());
      console.log(chooser());
      console.log(chooser());
      console.log(chooser());
      console.log(chooser());
      console.log(chooser());
      console.log(chooser());
      console.log(chooser());
      console.log(chooser());
    return <div> </div>;
};
export default Names;
