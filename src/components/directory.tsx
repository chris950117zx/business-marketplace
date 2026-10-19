"use client";

import { useMemo, useState } from "react";
import { MapPin, Search, SlidersHorizontal } from "lucide-react";
import type { Business, Product } from "@/data/marketplace";
import { BusinessCard, ProductCard } from "./ui";

type DirectoryProps =
  | { kind: "business"; items: Business[]; initialQuery?: string; initialCategory?: string }
  | { kind: "product"; items: Product[]; initialQuery?: string; initialCategory?: string };

const PAGE_SIZE = 3;

export function Directory(props: DirectoryProps) {
  const [query, setQuery] = useState(props.initialQuery ?? "");
  const [category, setCategory] = useState(props.initialCategory ?? "All");
  const [location, setLocation] = useState("All");
  const [sort, setSort] = useState("featured");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const categories = ["All", ...new Set(props.items.map((item) => item.category))];
  const locations = props.kind === "business"
    ? ["All", ...new Set(props.items.map((item) => item.location))]
    : [];

  const rows = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const filtered = props.items.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesLocation = props.kind !== "business" || location === "All" || ("location" in item && item.location === location);
      return matchesCategory && matchesLocation && JSON.stringify(item).toLowerCase().includes(needle);
    });
    return [...filtered].sort((a, b) => sort === "name" ? a.name.localeCompare(b.name) : Number(b.featured) - Number(a.featured));
  }, [query, category, location, sort, props]);

  function updateFilters(update: () => void) {
    update();
    setVisible(PAGE_SIZE);
  }

  return <div className="container-shell section-space">
    <div className={`card mb-7 grid gap-4 p-4 ${props.kind === "business" ? "md:grid-cols-2 lg:grid-cols-[1fr_220px_240px_170px]" : "md:grid-cols-[1fr_220px_180px]"}`}>
      <label className="relative"><span className="sr-only">Search directory</span><Search className="absolute left-3 top-3.5 text-slate-400" size={18}/><input className="input pl-10" value={query} onChange={(event) => updateFilters(() => setQuery(event.target.value))} placeholder={`Search ${props.kind === "business" ? "businesses or services" : "products"}`}/></label>
      <label><span className="sr-only">Category</span><select className="input" value={category} onChange={(event) => updateFilters(() => setCategory(event.target.value))}>{categories.map((value) => <option key={value}>{value}</option>)}</select></label>
      {props.kind === "business" && <label className="relative"><span className="sr-only">Location</span><MapPin className="pointer-events-none absolute left-3 top-3.5 text-slate-400" size={17}/><select className="input pl-9" value={location} onChange={(event) => updateFilters(() => setLocation(event.target.value))}>{locations.map((value) => <option key={value}>{value}</option>)}</select></label>}
      <label><span className="sr-only">Sort results</span><select className="input" value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Featured first</option><option value="name">Name A–Z</option></select></label>
    </div>
    <div className="mb-6 flex items-center justify-between"><p aria-live="polite" className="text-sm text-slate-600"><strong className="text-slate-900">{rows.length}</strong> results</p><span className="flex items-center gap-2 text-sm text-slate-500"><SlidersHorizontal size={16}/>Local filters</span></div>
    {rows.length ? <><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{props.kind === "business" ? rows.slice(0, visible).map((item) => <BusinessCard key={item.slug} business={item as Business}/>) : rows.slice(0, visible).map((item) => <ProductCard key={item.slug} product={item as Product}/>)}</div>{visible < rows.length && <div className="mt-8 text-center"><button className="btn-secondary" onClick={() => setVisible((count) => count + PAGE_SIZE)}>Load more <span className="text-slate-500">({rows.length - visible} remaining)</span></button></div>}</> : <div className="card py-20 text-center"><h2 className="text-xl font-bold text-[#102a43]">No matches found</h2><p className="mt-2 text-slate-500">Try a broader search or choose another category.</p><button className="btn-secondary mt-5" onClick={() => { setQuery(""); setCategory("All"); setLocation("All"); setVisible(PAGE_SIZE); }}>Clear filters</button></div>}
  </div>;
}
