let sounds = [
    {keyId:"key_2", file: "sound/f1s.ogg", keyCode: "50", color: "black"},
    {keyId:"key_3", file: "sound/g1s.ogg", keyCode: "51", color: "black"},
    {keyId:"key_4", file: "sound/a1s.ogg", keyCode: "52", color: "black"},
    {keyId:"key_6", file: "sound/c2s.ogg", keyCode: "54", color: "black"},
    {keyId:"key_7", file: "sound/d2s.ogg", keyCode: "55", color: "black"},
    {keyId:"key_9", file: "sound/f2s.ogg", keyCode: "57", color: "black"},
    {keyId:"key_0", file: "sound/g2s.ogg", keyCode: "48", color: "black"},
    {keyId:"key_dash", file: "sound/a3s.ogg", keyCode: "189", color: "black"},
    {keyId:"key_s", file: "sound/c3s.ogg", keyCode: "83", color: "black"},
    {keyId:"key_d", file: "sound/d3s.ogg", keyCode: "68", color: "black"},
    {keyId:"key_g", file: "sound/f3s.ogg", keyCode: "71", color: "black"},
    {keyId:"key_h", file: "sound/g3s.ogg", keyCode: "72", color: "black"},
    {keyId:"key_j", file: "sound/a4s.ogg", keyCode: "74", color: "black"},
    {keyId:"key_q", file: "sound/f1.ogg",  keyCode:"81", color: "white"},
    {keyId:"key_w", file: "sound/g1.ogg",  keyCode:"87", color: "white"},
    {keyId:"key_e", file: "sound/a2.ogg",  keyCode:"69", color: "white"},
    {keyId:"key_r", file: "sound/b2.ogg",  keyCode:"82", color: "white"},
    {keyId:"key_t", file: "sound/c2.ogg",  keyCode:"84", color: "white"},
    {keyId:"key_y", file: "sound/d2.ogg",  keyCode:"89", color: "white"},
    {keyId:"key_u", file: "sound/e2.ogg",  keyCode:"85", color: "white"},
    {keyId:"key_i", file: "sound/f2.ogg",  keyCode:"73", color: "white"},
    {keyId:"key_o", file: "sound/g2.ogg",  keyCode:"79", color: "white"},
    {keyId:"key_p", file: "sound/a3.ogg",  keyCode:"80", color: "white"},
    {keyId:"key_bracket", file: "sound/b3.ogg", keyCode: "219", color: "white"},
    {keyId:"key_z", file: "sound/c3.ogg",  keyCode:"90", color: "white"},
    {keyId:"key_x", file: "sound/d3.ogg",  keyCode:"88", color: "white"},
    {keyId:"key_c", file: "sound/e3.ogg",  keyCode:"67", color: "white"},
    {keyId:"key_v", file: "sound/f3.ogg",  keyCode:"86", color: "white"},
    {keyId:"key_b", file: "sound/g3.ogg",  keyCode:"66", color: "white"},
    {keyId:"key_n", file: "sound/a4.ogg",  keyCode:"78", color: "white"},
    {keyId:"key_m", file: "sound/b4.ogg",  keyCode:"77", color: "white"}
];
  
sounds.map(function(element) {
  document.getElementById(element.keyId).addEventListener("click", () => {
    playSound(element.file);
  });
});


sounds.map(function(element) {
  window.addEventListener("keydown", () => {
    if (event.keyCode == element.keyCode && element.color == "white") {
      playSound(element.file);
      focusWhiteElement(element.keyId);
    }
    else if (event.keyCode == element.keyCode && element.color == "black") {
      playSound(element.file);
      focusBlackElement(element.keyId);
    };
  });
  window.addEventListener("keyup", () => {
    if (event.keyCode == element.keyCode && element.color == "white") {
      // unfocusBlackElement(element.keyId);
      unfocusWhiteElement(element.keyId);
    }
    else if (event.keyCode == element.keyCode && element.color == "black") {
      unfocusBlackElement(element.keyId);
    };;
  });
});

  function playSound(file) {
    let audio = new Audio();
    audio.src = file;
    audio.play();
  }

  function focusWhiteElement (el) {
      document.getElementById(el).classList.add('w_active');
  }

  function focusBlackElement (el) {
    document.getElementById(el).classList.add('b_active');
}

  function unfocusWhiteElement (el) {
    document.getElementById(el).classList.remove('w_active');
}

  function unfocusBlackElement (el) {
    document.getElementById(el).classList.remove('b_active');
}

