
import fs from 'fs';
import path from 'path';
import { parseString } from 'xml2js';

import { IFileHandler } from './IFileHandler.mts';
import FileType, { FileType_t } from './FileType.mts';

export namespace com$fruutie$core$util {

    export class FileHandler implements IFileHandler {

        public read(filePath: string, dataType: FileType_t): any {
            const fullPath = path.resolve(filePath);

            if (!fs.existsSync(fullPath))
                throw new Error(`File not found: ${fullPath}`);

            const fileContent = fs.readFileSync(fullPath, 'utf-8');

            switch (dataType) {
                case FileType.JSON:
                    return JSON.parse(fileContent);
                case 'yaml':
                    //REM: Simplified YAML parsing: splitting lines and creating objects
                    const yamlData: { [key: string]: string } = {};
                    fileContent.split('\n').forEach((line) => {
                        const [key, value] = line.split(': ');
                        if (key && value) {
                            yamlData[key.trim()] = value.trim();
                        }
                    });
                    return yamlData;
                case 'xml':
                    let xmlData;
                    parseString(fileContent, (err: any, result: any) => {
                        if (err) {
                            throw new Error(`Failed to parse XML: ${err.message}`);
                        }
                        xmlData = result;
                    });
                    return xmlData;
                default:
                    throw new Error(`Unsupported data type: ${dataType}`);
            }
        }

        public write(filePath: string, data: any, dataType: FileType_t): void {
            const fullPath = path.resolve(filePath);
            let content = '';

            switch (dataType) {
                case 'json':
                    content = JSON.stringify(data, null, 2);
                    break;
                case 'yaml':
                    //REM: Simplified YAML formatting: converting object to string
                    for (const [key, value] of Object.entries(data)) {
                        content += `${key}: ${value}\n`;
                    }
                    break;
                case 'xml':
                    //REM: Simplified XML formatting: converting object to string
                    content = this.formatXML(data);
                    break;
                default:
                    throw new Error(`Unsupported data type: ${dataType}`);
            }

            fs.writeFileSync(fullPath, content);
        }

        private formatXML(data: any, indent: string = ''): string {
            let xml = '';
            for (const [key, value] of Object.entries(data)) {
                xml += `${indent}<${key}>\n`;
                if (typeof value === 'object') {
                    xml += this.formatXML(value, `${indent}  `);
                } else {
                    xml += `${indent}  ${value}\n`;
                }
                xml += `${indent}</${key}>\n`;
            }
            return xml;
        }
    }

    // //REM: Example usage:
    // const fileHandler = new FileHandler();

    // //REM: Read from JSON
    // const jsonData = fileHandler.read('data.json', FileType.JSON);
    // console.log('JSON Data:', jsonData);

    // //REM: Write to YAML
    // const yamlData = { name: 'John', age: 30 };
    // fileHandler.write('data.yaml', yamlData, FileType.YAML);

    // //REM: Read from XML
    // const xmlData = fileHandler.read('data.xml', FileType.XML);
    // console.log('XML Data:', xmlData);

}