import { mime } from 'https://deno.land/x/mimetypes@v1.0.0/mod.ts';

async function main() {

    const resp = await fetch(Deno.args[0]);
    const arrayBuffer = await resp.arrayBuffer();

    const contentType = resp.headers.get("content-type");
    const extension = mime.getExtension(contentType!);

    await Deno.writeFile(`file.${extension}`, new Uint8Array(arrayBuffer));

}

await main();