import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone } from 'lucide-react';

const mockRegistrations = [
  { name: 'Aisha Khan', email: 'aisha.k@example.com', whatsapp: '+60123456789', status: 'Registered' },
  { name: 'Benny Tan', email: 'benny.t@example.com', whatsapp: '+60198765432', status: 'Registered' },
  { name: 'Chandra Devi', email: 'chandra.d@example.com', whatsapp: '+60176543210', status: 'Registered' },
  { name: 'David Lee', email: 'david.l@example.com', whatsapp: '+60112345678', status: 'Registered' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline">Admin Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your challenge.</p>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Recent Registrations</CardTitle>
          <CardDescription>
            Here are the latest participants who have joined the VSB Challenge.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockRegistrations.map((user) => (
                <TableRow key={user.email}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                       <a href={`mailto:${user.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                         <Mail className="h-4 w-4" />
                         {user.email}
                       </a>
                       <a href={`https://wa.me/${user.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                         <Phone className="h-4 w-4" />
                         {user.whatsapp}
                       </a>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="secondary">{user.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
