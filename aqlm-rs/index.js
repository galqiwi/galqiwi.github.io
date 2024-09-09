// import init, {LlamaLoader} from './pkg/wasm.js';

// window.LlamaLoader = LlamaLoader

// // init().then(async () => {
// //     let loader = await window.LlamaLoader.new(10);
// //     console.log("loader")
// //     for (let i = 0; i < 10; i++) {
// //         await loader.load_state_dict_chunk(i);
// //         console.log(i);
// //     }
// //     let api = await loader.into_llama_api();
// //     console.log(api.next());
// // })

// const worker = new Worker(new URL('./worker.js', import.meta.url))


// worker.onmessage = (e) => {
//     let pre = window.document.getElementById("log");
//     pre.textContent = e.data;
// };

// window.worker = worker

