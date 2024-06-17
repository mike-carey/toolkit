// @generated by protobuf-ts 2.9.1 with parameter long_type_string,client_none,generate_dependencies
// @generated from protobuf file "results/api/v1/blobcache.proto" (package "github.actions.results.api.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "../../../google/protobuf/timestamp";
/**
 * @generated from protobuf message github.actions.results.api.v1.GetCachedBlobRequest
 */
export interface GetCachedBlobRequest {
    /**
     * Owner of the blob(s) to be retrieved
     *
     * @generated from protobuf field: string owner = 1;
     */
    owner: string;
    /**
     * Key(s) of te blob(s) to be retrieved
     *
     * @generated from protobuf field: repeated string keys = 2;
     */
    keys: string[];
}
/**
 * @generated from protobuf message github.actions.results.api.v1.GetCachedBlobResponse
 */
export interface GetCachedBlobResponse {
    /**
     * List of blobs that match the requested keys
     *
     * @generated from protobuf field: repeated github.actions.results.api.v1.GetCachedBlobResponse.Blob blobs = 1;
     */
    blobs: GetCachedBlobResponse_Blob[];
}
/**
 * @generated from protobuf message github.actions.results.api.v1.GetCachedBlobResponse.Blob
 */
export interface GetCachedBlobResponse_Blob {
    /**
     * Key of the blob
     *
     * @generated from protobuf field: string key = 1;
     */
    key: string;
    /**
     * Download url for the cached blob
     *
     * @generated from protobuf field: string signed_url = 2;
     */
    signedUrl: string;
    /**
     * Version of the cached blob entry
     *
     * @generated from protobuf field: int32 version = 3;
     */
    version: number;
    /**
     * Checksum of the blob
     *
     * @generated from protobuf field: string checksum = 4;
     */
    checksum: string;
    /**
     * Timestamp for when the blob cache entry expires
     *
     * @generated from protobuf field: google.protobuf.Timestamp expires_at = 5;
     */
    expiresAt?: Timestamp;
    /**
     * Timestamp for when the blob cache entry was created
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 6;
     */
    createdAt?: Timestamp;
}
/**
 * @generated from protobuf message github.actions.results.api.v1.GetCacheBlobUploadURLRequest
 */
export interface GetCacheBlobUploadURLRequest {
    /**
     * Owner of the blob(s) to be retrieved
     *
     * @generated from protobuf field: string organization = 1;
     */
    organization: string;
    /**
     * Key(s) of te blob(s) to be retrieved
     *
     * @generated from protobuf field: repeated string keys = 2;
     */
    keys: string[];
}
/**
 * @generated from protobuf message github.actions.results.api.v1.GetCacheBlobUploadURLResponse
 */
export interface GetCacheBlobUploadURLResponse {
    /**
     * List of upload URLs that match the requested keys
     *
     * @generated from protobuf field: repeated github.actions.results.api.v1.GetCacheBlobUploadURLResponse.Url urls = 1;
     */
    urls: GetCacheBlobUploadURLResponse_Url[];
}
/**
 * @generated from protobuf message github.actions.results.api.v1.GetCacheBlobUploadURLResponse.Url
 */
export interface GetCacheBlobUploadURLResponse_Url {
    /**
     * Key of the blob
     *
     * @generated from protobuf field: string key = 1;
     */
    key: string;
    /**
     * URL to the blob
     *
     * @generated from protobuf field: string url = 2;
     */
    url: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class GetCachedBlobRequest$Type extends MessageType<GetCachedBlobRequest> {
    constructor() {
        super("github.actions.results.api.v1.GetCachedBlobRequest", [
            { no: 1, name: "owner", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "keys", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetCachedBlobRequest>): GetCachedBlobRequest {
        const message = { owner: "", keys: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetCachedBlobRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCachedBlobRequest): GetCachedBlobRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string owner */ 1:
                    message.owner = reader.string();
                    break;
                case /* repeated string keys */ 2:
                    message.keys.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetCachedBlobRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string owner = 1; */
        if (message.owner !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.owner);
        /* repeated string keys = 2; */
        for (let i = 0; i < message.keys.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.keys[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.GetCachedBlobRequest
 */
export const GetCachedBlobRequest = new GetCachedBlobRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCachedBlobResponse$Type extends MessageType<GetCachedBlobResponse> {
    constructor() {
        super("github.actions.results.api.v1.GetCachedBlobResponse", [
            { no: 1, name: "blobs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GetCachedBlobResponse_Blob }
        ]);
    }
    create(value?: PartialMessage<GetCachedBlobResponse>): GetCachedBlobResponse {
        const message = { blobs: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetCachedBlobResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCachedBlobResponse): GetCachedBlobResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated github.actions.results.api.v1.GetCachedBlobResponse.Blob blobs */ 1:
                    message.blobs.push(GetCachedBlobResponse_Blob.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetCachedBlobResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated github.actions.results.api.v1.GetCachedBlobResponse.Blob blobs = 1; */
        for (let i = 0; i < message.blobs.length; i++)
            GetCachedBlobResponse_Blob.internalBinaryWrite(message.blobs[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.GetCachedBlobResponse
 */
export const GetCachedBlobResponse = new GetCachedBlobResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCachedBlobResponse_Blob$Type extends MessageType<GetCachedBlobResponse_Blob> {
    constructor() {
        super("github.actions.results.api.v1.GetCachedBlobResponse.Blob", [
            { no: 1, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "signed_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "version", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "checksum", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "expires_at", kind: "message", T: () => Timestamp },
            { no: 6, name: "created_at", kind: "message", T: () => Timestamp }
        ]);
    }
    create(value?: PartialMessage<GetCachedBlobResponse_Blob>): GetCachedBlobResponse_Blob {
        const message = { key: "", signedUrl: "", version: 0, checksum: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetCachedBlobResponse_Blob>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCachedBlobResponse_Blob): GetCachedBlobResponse_Blob {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string key */ 1:
                    message.key = reader.string();
                    break;
                case /* string signed_url */ 2:
                    message.signedUrl = reader.string();
                    break;
                case /* int32 version */ 3:
                    message.version = reader.int32();
                    break;
                case /* string checksum */ 4:
                    message.checksum = reader.string();
                    break;
                case /* google.protobuf.Timestamp expires_at */ 5:
                    message.expiresAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.expiresAt);
                    break;
                case /* google.protobuf.Timestamp created_at */ 6:
                    message.createdAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetCachedBlobResponse_Blob, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string key = 1; */
        if (message.key !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.key);
        /* string signed_url = 2; */
        if (message.signedUrl !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.signedUrl);
        /* int32 version = 3; */
        if (message.version !== 0)
            writer.tag(3, WireType.Varint).int32(message.version);
        /* string checksum = 4; */
        if (message.checksum !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.checksum);
        /* google.protobuf.Timestamp expires_at = 5; */
        if (message.expiresAt)
            Timestamp.internalBinaryWrite(message.expiresAt, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp created_at = 6; */
        if (message.createdAt)
            Timestamp.internalBinaryWrite(message.createdAt, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.GetCachedBlobResponse.Blob
 */
export const GetCachedBlobResponse_Blob = new GetCachedBlobResponse_Blob$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCacheBlobUploadURLRequest$Type extends MessageType<GetCacheBlobUploadURLRequest> {
    constructor() {
        super("github.actions.results.api.v1.GetCacheBlobUploadURLRequest", [
            { no: 1, name: "organization", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "keys", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetCacheBlobUploadURLRequest>): GetCacheBlobUploadURLRequest {
        const message = { organization: "", keys: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetCacheBlobUploadURLRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCacheBlobUploadURLRequest): GetCacheBlobUploadURLRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string organization */ 1:
                    message.organization = reader.string();
                    break;
                case /* repeated string keys */ 2:
                    message.keys.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetCacheBlobUploadURLRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string organization = 1; */
        if (message.organization !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.organization);
        /* repeated string keys = 2; */
        for (let i = 0; i < message.keys.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.keys[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.GetCacheBlobUploadURLRequest
 */
export const GetCacheBlobUploadURLRequest = new GetCacheBlobUploadURLRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCacheBlobUploadURLResponse$Type extends MessageType<GetCacheBlobUploadURLResponse> {
    constructor() {
        super("github.actions.results.api.v1.GetCacheBlobUploadURLResponse", [
            { no: 1, name: "urls", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GetCacheBlobUploadURLResponse_Url }
        ]);
    }
    create(value?: PartialMessage<GetCacheBlobUploadURLResponse>): GetCacheBlobUploadURLResponse {
        const message = { urls: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetCacheBlobUploadURLResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCacheBlobUploadURLResponse): GetCacheBlobUploadURLResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated github.actions.results.api.v1.GetCacheBlobUploadURLResponse.Url urls */ 1:
                    message.urls.push(GetCacheBlobUploadURLResponse_Url.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetCacheBlobUploadURLResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated github.actions.results.api.v1.GetCacheBlobUploadURLResponse.Url urls = 1; */
        for (let i = 0; i < message.urls.length; i++)
            GetCacheBlobUploadURLResponse_Url.internalBinaryWrite(message.urls[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.GetCacheBlobUploadURLResponse
 */
export const GetCacheBlobUploadURLResponse = new GetCacheBlobUploadURLResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCacheBlobUploadURLResponse_Url$Type extends MessageType<GetCacheBlobUploadURLResponse_Url> {
    constructor() {
        super("github.actions.results.api.v1.GetCacheBlobUploadURLResponse.Url", [
            { no: 1, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "url", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetCacheBlobUploadURLResponse_Url>): GetCacheBlobUploadURLResponse_Url {
        const message = { key: "", url: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetCacheBlobUploadURLResponse_Url>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCacheBlobUploadURLResponse_Url): GetCacheBlobUploadURLResponse_Url {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string key */ 1:
                    message.key = reader.string();
                    break;
                case /* string url */ 2:
                    message.url = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetCacheBlobUploadURLResponse_Url, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string key = 1; */
        if (message.key !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.key);
        /* string url = 2; */
        if (message.url !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.url);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.GetCacheBlobUploadURLResponse.Url
 */
export const GetCacheBlobUploadURLResponse_Url = new GetCacheBlobUploadURLResponse_Url$Type();
/**
 * @generated ServiceType for protobuf service github.actions.results.api.v1.BlobCacheService
 */
export const BlobCacheService = new ServiceType("github.actions.results.api.v1.BlobCacheService", [
    { name: "GetCachedBlob", options: {}, I: GetCachedBlobRequest, O: GetCachedBlobResponse },
    { name: "GetCacheBlobUploadURL", options: {}, I: GetCacheBlobUploadURLRequest, O: GetCacheBlobUploadURLResponse }
]);