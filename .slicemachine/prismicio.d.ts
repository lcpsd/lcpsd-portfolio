// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Budges documents */
type BudgesDocumentData = Record<string, never>;
/**
 * Budges document from Prismic
 *
 * - **API ID**: `budges`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BudgesDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<BudgesDocumentData>, "budges", Lang>;
/** Content for Certifications documents */
interface CertificationsDocumentData {
    /**
     * imageUrl field in *Certifications*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: certifications.imageurl
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    imageurl: prismicT.LinkField;
    /**
     * title field in *Certifications*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: certifications.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * order field in *Certifications*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: certifications.order
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    order: prismicT.NumberField;
}
/**
 * Certifications document from Prismic
 *
 * - **API ID**: `certifications`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CertificationsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<CertificationsDocumentData>, "certifications", Lang>;
/** Content for Profile documents */
interface ProfileDocumentData {
    /**
     * linkedIn field in *Profile*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: profile.linkedin
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    linkedin: prismicT.LinkField;
    /**
     * github field in *Profile*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: profile.github
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    github: prismicT.LinkField;
    /**
     * name field in *Profile*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: profile.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * avatarUrl field in *Profile*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: profile.avatarurl
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    avatarurl: prismicT.LinkField;
    /**
     * whatsapp field in *Profile*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: profile.whatsapp
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    whatsapp: prismicT.KeyTextField;
    /**
     * location field in *Profile*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: profile.location
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    location: prismicT.KeyTextField;
}
/**
 * Profile document from Prismic
 *
 * - **API ID**: `profile`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProfileDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<ProfileDocumentData>, "profile", Lang>;
/** Content for Projects documents */
interface ProjectsDocumentData {
    /**
     * title field in *Projects*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *Projects*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * Url field in *Projects*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.url
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    url: prismicT.LinkField;
    /**
     * Order field in *Projects*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.order
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    order: prismicT.LinkField;
    /**
     * Screenshot field in *Projects*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.screenshot
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    screenshot: prismicT.LinkField;
}
/**
 * Projects document from Prismic
 *
 * - **API ID**: `projects`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<ProjectsDocumentData>, "projects", Lang>;
/** Content for Techs documents */
interface TechsDocumentData {
    /**
     * title field in *Techs*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: techs.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * description field in *Techs*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: techs.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * order field in *Techs*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: techs.order
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    order: prismicT.NumberField;
    /**
     * logoUrl field in *Techs*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: techs.logourl
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    logourl: prismicT.LinkField;
}
/**
 * Techs document from Prismic
 *
 * - **API ID**: `techs`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TechsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<TechsDocumentData>, "techs", Lang>;
export type AllDocumentTypes = BudgesDocument | CertificationsDocument | ProfileDocument | ProjectsDocument | TechsDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { BudgesDocumentData, BudgesDocument, CertificationsDocumentData, CertificationsDocument, ProfileDocumentData, ProfileDocument, ProjectsDocumentData, ProjectsDocument, TechsDocumentData, TechsDocument, AllDocumentTypes };
    }
}
